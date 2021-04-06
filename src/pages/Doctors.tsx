import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {EmployeeType, getDoctors} from "../store/app-reducer";
import {AppRootStateType} from "../store/store";
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {NavLink} from "react-router-dom";
import {PATH} from "../routes/Routes";
import {conversionDate} from "../utils/helperFunction";


export const Doctors = () => {
    const dispatch = useDispatch()
    const doctors = useSelector<AppRootStateType, Array<EmployeeType>>(state => state.app.Employees)
    useEffect(() => {
        dispatch(getDoctors())
    }, [])

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });

    function createData(id: number, FIO: string, birthDate: string) {
        return {id, FIO, birthDate};
    }

    const rows = doctors.sort((a, b) => a.lastName.localeCompare(b.lastName))
        .map((doc) => createData(doc.id, `${doc.lastName} ${doc.firstName} ${doc.middleName}`, conversionDate(doc.birthDate)))

    const classes = useStyles();


    return (

        <div className="App">
            СОТРУДНИКИ
            <TableContainer component={Paper} elevation={3}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">ФИО</TableCell>
                            <TableCell align="center">Дата рождения</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id} selected={true}>
                                <TableCell align="center" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="center"><NavLink
                                    to={`${PATH.DOCTOR}/${row.id}`}>{row.FIO}</NavLink></TableCell>
                                <TableCell align="center">{row.birthDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}
