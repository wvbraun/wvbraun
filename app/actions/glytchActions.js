"use strict";

import types from "./actionTypes";
//import GlytchApi from "../api/glytchApi";
import GlytchApi from "../api/mockGlytchApi";

export function loadImagesError(message) {
  return { type: types.LOAD_IMAGES_FAIL, message };
}

export function loadImagesSuccess(images) {
  return { type: types.LOAD_IMAGES_SUCCESS, images };
}

export function uploadError(message) {
  return { type: types.UPLOAD_IMAGE_FAIL, message };
}

export function uploadImageSuccess(image) {
  return { type: types.UPLOAD_IMAGE_SUCCESS, image };
}

export function loadImages() {
  return (dispatch) => {
    return GlytchApi.getAllImages()
      .then((images) => {
        dispatch(loadImagesSuccess(images));
      })
      .catch((error) => {
        throw(error);
      });
  };
}

export function uploadImage(image) {
  return (dispatch) => {
    return GlytchApi.uploadImage(image)
      .then((image) => {
        dispatch(uploadImageSuccess(image));
      })
      .catch((error) => {
        throw(error);
      });
  };
}
