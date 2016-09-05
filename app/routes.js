"use strict";

import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/app";
import HomePage from "./components/home/HomePage";
import GlychPage from "./components/glych/GlychPage";
import NotFoundPage from "./components/common/NotFoundPage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/glych" component={GlychPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
