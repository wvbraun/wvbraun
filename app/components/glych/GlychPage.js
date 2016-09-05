"use strict";

import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import GlychHeader from "./GlychHeader";
import * as glychActions  from "../../actions/glychActions";

class GlychPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="row">
        <GlychHeader />
      </div>
    );
  }
}

GlychPage.propTypes = {
  actions: PropTypes.object.isRequired
};


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(glychActions, dispatch)
  };
}

export default connect(mapDispatchToProps)(GlychPage);
