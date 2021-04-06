import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {EmployeeType, getDoctors} from "../store/app-reducer";
import {AppRootStateType} from "../store/store";


export const Doctors = () => {
    const dispatch = useDispatch()
    const doctors = useSelector<AppRootStateType, Array<EmployeeType>>(state => state.app.Employees)
    useEffect(() => {
        dispatch(getDoctors())
    }, [])





    return (
        <div className="App">


        </div>
    )
}