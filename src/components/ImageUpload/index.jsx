import React, { Component, Fragment } from "react";
import ImageUploader from "react-images-upload";

export class ImageUpload extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { values, handleChange, onDrop } = this.props;
    return (
      <Fragment>
      
        <ImageUploader
          withIcon={false}
          withPreview={true}
          buttonText="Add Images"
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
          color="secondary"
        />
        {/* <input type="file" onChange={this.handleChange} />
        <img src={this.state.file} /> */}
       
      </Fragment>
    );
  }
}

export default ImageUpload;
