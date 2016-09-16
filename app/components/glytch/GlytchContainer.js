"use strict";

import React, { PropTypes } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid, Row, Col } from "react-bootstrap";
import GlytchCanvas from "./GlytchCanvas";
import GlytchImageListPanel from "./GlytchImageListPanel";
import GlytchEffectsPanel from "./GlytchEffectsPanel";
import * as glytchActions  from "../../actions/glytchActions";

class GlytchContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.selectImage = this.selectImage.bind(this);
  }

  selectImage(event) {
    event.preventDefault();
    const image = {
      name: event.target.alt,
      url: event.target.src
    };
    this.props.actions.selectImage(image);
  }

  render() {
    const { images, currentImage } = this.props;
    return (
      <Grid fluid>
        <Row>
          <div className="glytch-image-list">
            <Col xs={3}>
              <GlytchImageListPanel
                images={images}
                currentImage={currentImage}
                onSelectImage={this.selectImage}
              />
            </Col>
          </div>
          <div className="glytch-canvas">
            <Col xs={6}>
              {currentImage && <GlytchCanvas image={currentImage}/>}
            </Col>
          </div>
          <div className="glytch-effects">
            <Col xs={3}>
              <GlytchEffectsPanel />
            </Col>
          </div>
        </Row>
      </Grid>
    );
  }
}

GlytchContainer.propTypes = {
  images: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  currentImage: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    images: ownProps.images,
    currentImage: ownProps.currentImage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(glytchActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(GlytchContainer);
