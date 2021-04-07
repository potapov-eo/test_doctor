import {Dispatch} from "redux";
import {getEmployees, getWorklog} from "../api";

const initialState: AppInitialStateType = {
    status: 'succeeded',
    error: null,
    Employees: [] as Array<EmployeeType>,
    workLogData: [] as Array<WorkLogDataType>
}

export const appReducer = (state: AppInitialStateType = initialState, action: ActionsType): AppInitialStateType => {
    switch (action.type) {
        case 'APP/SET_STATUS':
            return {...state, status: action.status}
        case 'APP/SET_ERROR':
            return {...state, error: action.error}
        case "APP/SET_EMPLOYEES":
            return {...state, Employees: action.employees}
        case "APP/SET_WORKLOG":
            return {...state, workLogData: action.workLogData}
        default:
            return state
    }
}

export const setAppStatus = (status: RequestStatusType) =>
    ({type: 'APP/SET_STATUS', status} as const)
export const setAppError = (error: string | null) =>
    ({type: 'APP/SET_ERROR', error} as const)
export const setEmployees = (employees: Array<EmployeeType>) => ({type: 'APP/SET_EMPLOYEES', employees} as const)
export const setWorkLog = (workLogData: Array<WorkLogDataType>) => ({type: 'APP/SET_WORKLOG', workLogData} as const)

export const getDoctors = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatus('loading'))
        const res = await getEmployees() as Array<EmployeeType>
        dispatch(setAppStatus('succeeded'))
        dispatch(setEmployees(res))

    } catch (e) {
        dispatch(setAppStatus('succeeded'))
        dispatch(setAppError("Error from response"))
    }
}
export const getWorkLogs = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatus('loading'))
        const res = await getWorklog() as Array<WorkLogDataType>
        dispatch(setAppStatus('succeeded'))
        dispatch(setWorkLog(res))

    } catch (e) {
        dispatch(setAppStatus('succeeded'))
        dispatch(setAppError("Error from response"))
    }
}

export type RequestStatusType = 'succeeded' | 'loading'

export type AppInitialStateType = {
    status: RequestStatusType,
    error: null | string,
    Employees: Array<EmployeeType>,
    workLogData: Array<WorkLogDataType>
}

export type EmployeeType = {
    id: number,
    firstName: string,
    lastName: string,
    middleName: string,
    birthDate: string,
    phone: string
}
export type WorkLogDataType = {
    id: number
    employee_id: number,
    from: string,
    to: string
}

type ActionsType =
    ReturnType<typeof setAppStatus> |
    ReturnType<typeof setAppError> |
    ReturnType<typeof setEmployees> |
    ReturnType<typeof setWorkLog>







