"use strict";

import initialState from "./initialState";
import types from "../actions/actionTypes";

export default function glytchReducer(state = initialState.images, action) {
  switch (action.type) {

    case types.LOAD_IMAGES_SUCCESS:
      return action.images;

    case types.UPLOD_IMAGE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.image)
      ];


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
