import React from 'react'
import {useParams} from 'react-router-dom'
import {EmployeeType, WorklogDataType} from "../store/app-reducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {fulConversionDate} from "../utils/helperFunction";


export const Doctor = () => {

    const {token} = useParams<{ token: string }>()
    const doctors = useSelector<AppRootStateType, Array<EmployeeType>>(state => state.app.Employees)
    const doctor: Array<EmployeeType> = doctors.filter((doc) => doc.id === +token)
    const WorkLogs = useSelector<AppRootStateType, Array<WorklogDataType>>(state => state.app.worklogData)
    const UserWorkLogs = WorkLogs.filter((log) => log.employee_id === +token)


    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });

    function createData(id: number, enterTime: string, outTime: string) {
        return {id, enterTime, outTime};
    }

    const rows = UserWorkLogs.map((log) =>
        createData(log.id, fulConversionDate(log.from), fulConversionDate(log.to)))

    const classes = useStyles();


    const exitErrorIds = UserWorkLogs.reduce((acc: Array<number>, userLog) => {
        const employeesIn = WorkLogs.filter((log) => new Date(userLog.to) > new Date(log.from))
            .filter((log) => new Date(userLog.to) < new Date(log.to)).length
        if (employeesIn < 3) {
            acc.push(userLog.id)
        }
        return acc
    }, [])


    console.log(exitErrorIds)


    return (
        <div className="App">
            <div> {doctor[0] && `Doctor: ${doctor[0].lastName} ${doctor[0].firstName} ${doctor[0].middleName}`} </div>
            <TableContainer component={Paper} elevation={3}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Log ID</TableCell>
                            <TableCell align="center">time from</TableCell>
                            <TableCell align="center">time to</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id} selected={exitErrorIds.includes(row.id)}>

                                <TableCell align="center" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="center">{row.enterTime}</TableCell>
                                <TableCell align="center">{(row.outTime)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}