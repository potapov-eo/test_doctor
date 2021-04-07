import {
    AppInitialStateType,
    appReducer,
    EmployeeType,
    setAppError,
    setAppStatus,
    setEmployees, setWorkLog,
    WorkLogDataType
} from "./app-reducer";


let startState: AppInitialStateType


beforeEach(() => {
    startState = {
        status: 'succeeded',
        error: null,
        Employees:[] as Array<EmployeeType>,
        workLogData:[] as Array<WorkLogDataType>
    }

});

test('correct status should be added', () => {
    const action = setAppStatus("loading");

    const endState = appReducer(startState, action)

    expect(endState.status).toBe("loading");
})
test('correct error should be added', () => {
    const action = setAppError("something wrong");

    const endState = appReducer(startState, action)

    expect(endState.error).toBe("something wrong");
})
test('correct Employees should be added', () => {

    const employees = [ {
        id: 1,
        firstName: "Леонид",
        lastName: "Старокадомский",
        middleName: "Михайлович",
        birthDate: "1875-03-27",
        phone: "+79975669545"
    },
        {
            id: 2,
            firstName: "Владимир",
            lastName: "Демихов",
            middleName: "Петрович",
            birthDate: "1916-06-18",
            phone: "+74951263366"
        }]

    const action = setEmployees(employees);

    const endState = appReducer(startState, action)

    expect(endState).toEqual({
        status: 'succeeded',
        error: null,
        Employees:[ {
            id: 1,
            firstName: "Леонид",
            lastName: "Старокадомский",
            middleName: "Михайлович",
            birthDate: "1875-03-27",
            phone: "+79975669545"
        },
            {
                id: 2,
                firstName: "Владимир",
                lastName: "Демихов",
                middleName: "Петрович",
                birthDate: "1916-06-18",
                phone: "+74951263366"
            }] ,
        workLogData:[],
    });
})
test('correct worklogs should be added', () => {

    const worklogs = [{
        id: 1,
        employee_id: 1,
        from: "2021-03-04 04:44:44",
        to: "2021-03-04 06:46:09"
    },
        {
            id: 2,
            employee_id: 1,
            from: "2021-03-04 06:55:01",
            to: "2021-03-04 08:13:10"
        },
        {
            id: 3,
            employee_id: 1,
            from: "2021-03-04 09:11:45",
            to: "2021-03-04 10:55:34"
        },]

    const action = setWorkLog(worklogs);

    const endState = appReducer(startState, action)

    expect(endState).toEqual({
        status: 'succeeded',
        error: null,
        Employees:[] ,
        workLogData:[{
            id: 1,
            employee_id: 1,
            from: "2021-03-04 04:44:44",
            to: "2021-03-04 06:46:09"
        },
            {
                id: 2,
                employee_id: 1,
                from: "2021-03-04 06:55:01",
                to: "2021-03-04 08:13:10"
            },
            {
                id: 3,
                employee_id: 1,
                from: "2021-03-04 09:11:45",
                to: "2021-03-04 10:55:34"
            },],
    });
})