import React from 'react'
import {useParams} from 'react-router-dom'
import {EmployeeType} from "../store/app-reducer";
import {useSelector} from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {fulConversionDate, getAutErrorIds} from "../utils/helperFunction";
import {selectorEmployees, selectorWorkLogData} from "../store/app-selector";


export const Doctor = () => {

    const {token} = useParams<{ token: string }>()
    const doctors = useSelector(selectorEmployees)
    const doctor: EmployeeType|undefined = doctors.find((doc) => doc.id === Number(token))
    const WorkLogs = useSelector(selectorWorkLogData)
    const UserWorkLogs = WorkLogs.filter((log) => log.employee_id === Number(token))

    function createTableData(id: number, enterTime: string, outTime: string) {
        return {id, enterTime, outTime};
    }

    const rows = UserWorkLogs.map((log) =>
        createTableData(log.id, fulConversionDate(log.from), fulConversionDate(log.to)))

    const outErrorIds = React.useMemo(() => getAutErrorIds(UserWorkLogs, WorkLogs), [WorkLogs, UserWorkLogs])

    return (
        <div className="App">
            <div> {doctor && `Doctor: ${doctor.lastName} ${doctor.firstName} ${doctor.middleName}`} </div>
            <TableContainer component={Paper} elevation={3}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Log ID</TableCell>
                            <TableCell align="center">time from</TableCell>
                            <TableCell align="center">time to</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id} selected={outErrorIds.includes(row.id)}>

                                <TableCell align="center" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="center">{row.enterTime}</TableCell>
                                <TableCell align="center">{row.outTime}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}