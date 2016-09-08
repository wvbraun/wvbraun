"use strict";

import React, { PropTypes } from "react";


const GlytchCanvas = ({ image }) => {
  return (
    <div className="canvas-wrapper">
      <img src={image.url} alt={image.name} />
    </div>
  );
};

GlytchCanvas.propTypes = {
  image: PropTypes.object.isRequired
};

export default GlytchCanvas;
