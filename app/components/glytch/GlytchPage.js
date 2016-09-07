"use strict";

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import GlytchHeader from "./GlytchHeader";
import GlytchCanvas from "./GlytchCanvas";
import * as glytchActions  from "../../actions/glytchActions";

class GlytchPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { images } = this.props;
    return (
      <div className="row">
        <GlytchHeader />
        <GlytchCanvas image={images[0]} />
      </div>
    );
  }
}

GlytchPage.propTypes = {
  images: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  const { glytch } = state;
  return {
    images: glytch.images
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(glytchActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GlytchPage);
