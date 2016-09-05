"use strict";

import types from "./actionTypes";
import GlychApi from "../api/glychApi";

export function uploadError(message) {
  return { type: types.UPLOAD_IMAGE_FAIL, message };
}

export function uploadImageSuccess(image) {
  return { type: types.UPLOAD_IMAGE_SUCCESS, image };
}

export function uploadImage(image) {
  return (dispatch) => {
    return GlychApi.uploadImage(image)
      .then((image) => {
        dispatch(uploadImageSuccess(image));
      })
      .catch((error) => {
        throw(error);
      });
  };
}
