import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./config";
import Home from "./components/Home/container";


ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById("app")
);