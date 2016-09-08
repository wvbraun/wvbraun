"use strict";

const delay = 1000;

const images = [
  {
    name: "nostalgia-smeared",
    url: "http://localhost:8080/img/nostalgia-smeared.jpg"
  }
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
