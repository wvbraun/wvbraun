"use strict";

const delay = 1000;

const images = [

];

class MockGlytchApi {
  static getAllImages() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], images));
      }, delay);
    });
  }

  static uploadImage(image) {
    image = Object.assign({}, image);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        images.push(image);
      }, delay);
    });
  }
}

export default MockGlytchApi;
