"use strict";

import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/app";
import HomePage from "./components/home/HomePage";
import GlytchPage from "./components/glytch/GlytchPage";
import NotFoundPage from "./components/common/NotFoundPage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/glytch" component={GlytchPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
