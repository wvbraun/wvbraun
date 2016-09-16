"use strict";

import React, { PropTypes } from "react";
import { Surface } from "gl-react-dom";
import { Image } from "react-bootstrap";
import GlytchEffects from "./GlytchEffects";

    //<Image src={image.url} alt={image.name} rounded responsive />
const GlytchCanvas = ({ image }) => {
  return (
    <Surface width={500} height={500} >
      <GlytchEffects />
    </Surface>
  );
};

GlytchCanvas.propTypes = {
  image: PropTypes.object.isRequired
};

export default GlytchCanvas;
