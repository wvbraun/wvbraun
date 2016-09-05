"use strict";

import { combineReducers } from "redux";
import glych from "./glychReducer";

const rootReducer = combineReducers({
  glych: glych
});

export default rootReducer;
