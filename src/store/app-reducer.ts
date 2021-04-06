import {Dispatch} from "redux";
import {setAppStatusAC} from "./auth-reducer";
import {getEmployees} from "../api";


export type RequestStatusType = 'succeeded' | 'loading'

const initialState: AppInitialStateType = {
    status: 'succeeded',
    error: null,
    Employees:[] as Array<EmployeeType>
}


// @ts-ignore
export const appReducer = (state: AppInitialStateType = initialState, action: ActionsType): AppInitialStateType => {
    switch (action.type) {
        case 'APP/SET_STATUS':
            return {...state, status: action.status}
        case 'APP/SET_ERROR':
            return {...state, error: action.error}
        case "APP/SET_EMPLOYEES":
            return {...state, Employees: action.employees}

        default:
            return state
    }
}

export const setAppStatus = (status: RequestStatusType) =>
    ({type: 'APP/SET_STATUS', status} as const)
export const setAppError = (error: string | null) =>
    ({type: 'APP/SET_ERROR', error} as const)
export const setEmployees = (employees: Array<EmployeeType>) => ({type: 'APP/SET_EMPLOYEES', employees} as const)

export const getDoctors = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatusAC('loading'))
       const  res = <Array<EmployeeType>> await getEmployees()
        dispatch(setAppStatusAC('succeeded'))
        dispatch(setEmployees(res))

    } catch (e) {
        dispatch(setAppError("Error from response"))
    }
}


type AppInitialStateType = {
    status: RequestStatusType,
    error: null | string,
    Employees:Array<EmployeeType>
}

export type EmployeeType ={
    id: number,
    firstName: string,
    lastName: string,
    middleName: string,
    birthDate: string,
    phone: string
}

type ActionsType =
    ReturnType<typeof setAppStatus> |
    ReturnType<typeof setAppError> |
    ReturnType<typeof setEmployees>







