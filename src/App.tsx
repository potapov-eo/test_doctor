import React, {useEffect} from 'react';
import './App.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import {BrowserRouter as Router, HashRouter} from "react-router-dom"
import {Routes} from "./routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {getDoctors, getWorkLogs} from "./store/app-reducer";
import {ErrorSnackbar} from "./components/ErrorSnackBar";
import {selectorError, selectorStatus} from "./store/app-selector";


function App() {
    const dispatch = useDispatch()
    const status = useSelector(selectorStatus)
    const error = useSelector(selectorError)

    useEffect(() => {
        dispatch(getWorkLogs())
        dispatch(getDoctors())
    }, [dispatch])

    return (<HashRouter>
            <div className="App">
                {error !== null && <ErrorSnackbar/>}
                {status === 'loading' && <LinearProgress/>}
                <Routes/>
            </div>
        </HashRouter>
    );
}

export default App;
