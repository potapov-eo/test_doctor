import React, {useEffect} from 'react'
import {NavLink, useParams} from 'react-router-dom'
import {getWorklogs, WorklogDataType} from "../store/app-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {PATH} from "../routes/Routes";
import {conversionDate} from "../utils/helperFunction";


export const Doctor = () => {
    const dispatch = useDispatch()
    const {token} = useParams<{ token: string }>()
    const WorkLogs = useSelector<AppRootStateType, Array<WorklogDataType>>(state => state.app.worklogData)
    const UserWorkLogs = WorkLogs.filter((log) => log.employee_id === +token)
    useEffect(() => {
        dispatch(getWorklogs())
    }, [])
    console.log(token)
    console.log(UserWorkLogs)
     const useStyles = makeStyles({
         table: {
             minWidth: 650,
         },
     });

     function createData(id:number, enterTime: string, outTime: string) {
         return {id, enterTime, outTime};
     }

     const rows = UserWorkLogs.map((log) =>
         createData(log.id, conversionDate(log.from ), conversionDate(log.to )))

     const classes = useStyles();


    return (
        <div className="App">

            <TableContainer component={Paper} elevation={3}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">time from</TableCell>
                            <TableCell align="center">time to</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id} selected={true}>
                                <TableCell align="center" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="center">{row.enterTime}</TableCell>
                                <TableCell align="center">{conversionDate(row.outTime)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}