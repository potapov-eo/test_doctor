import {Dispatch} from "redux";
import {getEmployees, getWorklog} from "../api";


export type RequestStatusType = 'succeeded' | 'loading'

const initialState: AppInitialStateType = {
    status: 'succeeded',
    error: null,
    Employees:[] as Array<EmployeeType>,
    worklogData:[] as Array<WorklogDataType>
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
        case "APP/SET_WORKLOG":
            return {...state, worklogData: action.worklogData}


        default:
            return state
    }
}

export const setAppStatus = (status: RequestStatusType) =>
    ({type: 'APP/SET_STATUS', status} as const)
export const setAppError = (error: string | null) =>
    ({type: 'APP/SET_ERROR', error} as const)
export const setEmployees = (employees: Array<EmployeeType>) => ({type: 'APP/SET_EMPLOYEES', employees} as const)
export const setworklog = (worklogData: Array<WorklogDataType>) => ({type: 'APP/SET_WORKLOG', worklogData} as const)

export const getDoctors = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatus('loading'))
       const  res = <Array<EmployeeType>> await getEmployees()
        dispatch(setAppStatus('succeeded'))
        dispatch(setEmployees(res))

    } catch (e) {
        dispatch(setAppStatus('succeeded'))
        dispatch(setAppError("Error from response"))
    }
}
export const getWorklogs = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatus('loading'))
        const  res = <Array<WorklogDataType>> await getWorklog()
        dispatch(setAppStatus('succeeded'))
        dispatch(setworklog(res))

    } catch (e) {
        dispatch(setAppStatus('succeeded'))
        dispatch(setAppError("Error from response"))
    }
}


type AppInitialStateType = {
    status: RequestStatusType,
    error: null | string,
    Employees:Array<EmployeeType>,
    worklogData: Array<WorklogDataType>
}

export type EmployeeType ={
    id: number,
    firstName: string,
    lastName: string,
    middleName: string,
    birthDate: string,
    phone: string
}
export type WorklogDataType ={
    id: number
    employee_id: number,
    from: string,
    to: string
}

type ActionsType =
    ReturnType<typeof setAppStatus> |
    ReturnType<typeof setAppError> |
    ReturnType<typeof setEmployees>|
    ReturnType<typeof setworklog>







