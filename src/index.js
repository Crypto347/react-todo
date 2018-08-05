import ReactDOM from "react-dom";
import React from "react";
import store from './js/store/store';
import {Provider} from 'react-redux';

import App from "./js/components/container/app";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById("root")
);