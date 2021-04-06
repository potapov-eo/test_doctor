import React from 'react';
import './App.css';
import LinearProgress from '@material-ui/core/LinearProgress';
import {
    BrowserRouter as Router
} from "react-router-dom"
import {Routes} from "./routes/Routes";
import {useSelector} from "react-redux";
import {RequestStatusType} from "./store/app-reducer";
import {AppRootStateType} from "./store/store";


function App() {
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)
    return (<Router>
            <div className="App">

                {status === 'loading' && <LinearProgress/>}
                <Routes/>

            </div>
        </Router>
    );
}

export default App;
