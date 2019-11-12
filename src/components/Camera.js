import React from 'react';
import { Dimensions, Alert, StyleSheet, ActivityIndicator } from 'react-native';
import { RNCamera } from 'react-native-camera';

import CaptureButton from './CaptureButton';
import { KEY } from '../../keys/keys';

export default class Camera extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      identifedAs: '',
      loading: false
    };
  }

  takePicture = async function() {
    if (this.camera) {
      // Pause the camera's preview
      // this.camera.pausePreview();

      // Set the activity indicator
      this.setState((previousState, props) => ({
        loading: true
      }));

      // Set options
      const options = {
        base64: true
      };

      // Get the base64 version of the image
      const data = await this.camera.takePictureAsync(options);
      this.camera.pausePreview();

      // Get the identified image
      this.identifyImage(data.base64);
    }
  };

  identifyImage(imageData) {
    // Initialise Clarifai api
    // eslint-disable-next-line global-require
    const Clarifai = require('clarifai');

    const app = new Clarifai.App({
      apiKey: KEY
    });

    // Identify the image
    app.models
      .predict(Clarifai.GENERAL_MODEL, { base64: imageData })
      .then(response =>
        this.displayAnswer(response.outputs[0].data.concepts[0].name).catch(err => Alert.alert(err))
      );
  }

  displayAnswer(identifiedImage) {
    // Dismiss the acitivty indicator
    this.setState((prevState, props) => ({
      identifedAs: identifiedImage,
      loading: false
    }));
    // console.warn(this.state.identifedAs)

    // Show an alert with the answer on
    Alert.alert(this.state.identifedAs);

    // Resume the preview
    this.camera.resumePreview();
  }

  render() {
    return (
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.preview}>
        <ActivityIndicator
          size="large"
          style={styles.loadingIndicator}
          color="#fff"
          animating={this.state.loading}
        />
        <CaptureButton buttonDisabled={this.state.loading} onClick={this.takePicture.bind(this)} />
      </RNCamera>
    );
  }
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
