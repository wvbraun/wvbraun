"use strict";

import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import routes from "./routes";
import { loadImages } from "./actions/glytchActions";
import "./styles/styles.styl";

const store = configureStore();
store.dispatch(loadImages());

render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById("app")
);
