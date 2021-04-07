import {WorkLogDataType} from "../store/app-reducer";

export const conversionDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-GB').replaceAll("/", ".")
}

export const fulConversionDate = (date: string) => {
    return `${new Date(date).toLocaleDateString('en-GB').replaceAll("/", ".")} ${new
    Date(date).toLocaleDateString('en-GB').replaceAll("/", ":")}`
}

export const getAutErrorIds = (UserWorkLogs: Array<WorkLogDataType>, WorkLogs: Array<WorkLogDataType>) => {
    return UserWorkLogs.reduce((acc: Array<number>, userLog) => {
        const employeesIn = WorkLogs.filter((log) =>
            new Date(userLog.to) > new Date(log.from) && new Date(userLog.to) < new Date(log.to))
            .length
        if (employeesIn < 3) {
            acc.push(userLog.id)
        }
        return acc
    }, [])
}