import React, {useEffect} from 'react';
import './App.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import {
    BrowserRouter as Router
} from "react-router-dom"
import {Routes} from "./routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {getDoctors, getWorklogs, RequestStatusType} from "./store/app-reducer";
import {AppRootStateType} from "./store/store";
import {ErrorSnackbar} from "./components/ErrorSnacBar";


function App() {
    const dispatch = useDispatch()
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    const error = useSelector<AppRootStateType, null|string>(state => state.app.error)
    useEffect(() => {
        dispatch(getWorklogs())
        dispatch(getDoctors())
    }, [])
    return (<Router>
            <div className="App">
                {error !== null && <ErrorSnackbar/>}
                {status === 'loading' && <LinearProgress/>}
                <Routes/>

            </div>
        </Router>
    );
}

export default App;
