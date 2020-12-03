import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {store} from "./bll/store";
import AppWrapper from './AppWrapper';
import "./assets/normalize.css"

ReactDOM.render(
    <Provider store={store}>
        <AppWrapper/>
    </Provider>,
    document.getElementById('root')
);