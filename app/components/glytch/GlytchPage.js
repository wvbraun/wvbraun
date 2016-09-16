"use strict";

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import GlytchHeader from "./GlytchHeader";
import GlytchContainer from "./GlytchContainer";
import * as glytchActions  from "../../actions/glytchActions";

class GlytchPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { images, currentImage } = this.props;
    return (
      <div>
        <GlytchHeader />
        <GlytchContainer
          images={images}
          currentImage={currentImage}
        />
      </div>
    );
  }
}

GlytchPage.propTypes = {
  images: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  currentImage: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const { glytch } = state;
  return {
    images: glytch.images,
    currentImage: glytch.currentImage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(glytchActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GlytchPage);
