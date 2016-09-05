"use strict";

class GlychApi {
  static uploadImage(image) {
    return new Promise((resolve, reject) => {
      resolve(Object.assign({}, image));
    });
  }
}

export default GlychApi;
