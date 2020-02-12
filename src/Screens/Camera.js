import React from 'react';
import { Dimensions, Alert, StyleSheet, ActivityIndicator } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Clarifai from 'clarifai';

import CaptureButton from '../components/CaptureButton';
import { KEY } from '../../keys/keys';

export default class Camera extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      identifedAs: '',
      loading: false,
    };
  }

  takePicture = async function() {
    if (this.camera) {
      const options = {
        base64: true,
      };

      const data = await this.camera.takePictureAsync(options);

      this.setState((previousState, props) => ({
        loading: true,
      }));

      this.identifyImage(data.base64);
    }
  };

  identifyImage(imageData) {
    const app = new Clarifai.App({
      apiKey: KEY,
    });

    app.models
      .predict(Clarifai.GENERAL_MODEL, { base64: imageData })
      .then(response =>
        this.displayAnswer(response.outputs[0].data.concepts).catch(err =>
          Alert.alert(err),
        ),
      );
  }

  displayAnswer(identifiedImage) {
    this.setState((prevState, props) => ({
      identifedAs: identifiedImage,
      loading: false,
    }));
    this.props.navigation.navigate('DidSnapshotScreen', {
      identifiedImage,
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <ActivityIndicator
          size="large"
          style={styles.loadingIndicator}
          color="black"
          animating={this.state.loading}
        />
      );
    }

    return (
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.preview}>
        <CaptureButton
          buttonDisabled={this.state.loading}
          onClick={this.takePicture.bind(this)}
        />
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
    width: Dimensions.get('window').width,
  },
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
