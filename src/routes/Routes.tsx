import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import {Doctor} from "../pages/Doctor";
import {Doctors} from "../pages/Doctors";

export const PATH = {
    DOCTOR: "/doctor",
    DOCTORS: "/doctors",
}

export const Routes = () => {

    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={PATH.DOCTORS}/>}/>
                <Route path={`${PATH.DOCTOR}/:token`} render={() => <Doctor/>}/>
                <Route path={PATH.DOCTOR} render={() => <Doctor/>}/>
                <Route path={PATH.DOCTORS} render={() => <Doctors/>}/>
            </Switch>
        </div>
    )
}