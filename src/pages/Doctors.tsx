import React from 'react'
import {useSelector} from "react-redux";
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
import {selectorEmployees} from "../store/app-selector";


export const Doctors = () => {

    const doctors = useSelector(selectorEmployees)

    function createTableData(id: number, FIO: string, birthDate: string) {
        return {id, FIO, birthDate};
    }

    const alphabetTableRows = doctors.sort((a, b) => a.lastName.localeCompare(b.lastName))
        .map((doc) => createTableData(doc.id, `${doc.lastName} ${doc.firstName} ${doc.middleName}`, conversionDate(doc.birthDate)))

    return (

        <div className="App">
            <TableContainer component={Paper} elevation={3}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">ФИО</TableCell>
                            <TableCell align="center">Дата рождения</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {alphabetTableRows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell align="center" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell
                                    align="center"><NavLink
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
