"use strict";

import { combineReducers } from "redux";
import images from "./glytchReducer";

const rootReducer = combineReducers({
  images: images
});

export default rootReducer;
