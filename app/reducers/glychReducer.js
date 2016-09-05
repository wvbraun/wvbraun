"use strict";

import initialState from "./initialState";
import types from "../actions/actionTypes";

export default function glychReducer(state = initialState.glych, action) {
  switch (action.type) {
    case types.UPLOAD_IMAGE_SUCCESS:
      return Object.assign({}, state, {
        image: action.image,
        errorMessage: ""
      });

    case types.UPLOAD_IMAGE_FAIL:
      return Object.assign({}, state, {
        errorMessage: action.message
      });

/*
    case types.CREATE_TRACK_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.track)
      ];
*/


    /*case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter((course) => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    */

    default:
      return state;
  }
}
