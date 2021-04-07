import {AppRootStateType} from "./store";
import {EmployeeType, RequestStatusType, WorkLogDataType} from "./app-reducer";


export const selectorStatus = (state: AppRootStateType): RequestStatusType => state.app.status
export const selectorError = (state: AppRootStateType): string | null => state.app.error
export const selectorEmployees = (state: AppRootStateType): Array<EmployeeType> => state.app.Employees
export const selectorWorkLogData = (state: AppRootStateType): Array<WorkLogDataType> => state.app.workLogData
