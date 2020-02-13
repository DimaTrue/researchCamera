import React, { useState } from 'react';
import { Dimensions, Alert, StyleSheet, ActivityIndicator } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Clarifai from 'clarifai';

import CaptureButton from '../components/CaptureButton';
import DidSnapshotComponent from '../components/DidSnapshotComponent';
import { KEY } from '../../keys/keys';

const { width, height } = Dimensions.get('screen');

const Camera = () => {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [camera, setCamera] = useState(null);

  const takePicture = async function() {
    if (camera) {
      const options = {
        base64: true,
      };

      const data = await camera.takePictureAsync(options);
      camera.pausePreview();
      setLoading(true);
      identifyImage(data.base64);
    }
  };

  const identifyImage = imageData => {
    const app = new Clarifai.App({
      apiKey: KEY,
    });

    app.models
      .predict(Clarifai.GENERAL_MODEL, { base64: imageData })
      .then(response =>
        displayAnswer(response.outputs[0].data.concepts).catch(err =>
          Alert.alert(err),
        ),
      );
  };

  const displayAnswer = identifiedImage => {
    setLoading(false);
    setResponses(identifiedImage);
    setCamera(null);
  };

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        style={styles.loadingIndicator}
        color="black"
        animating={loading}
      />
    );
  }

  if (responses.length) {
    return (
      <DidSnapshotComponent
        recognizedData={responses}
        reset={() => setResponses([])}
      />
    );
  }

  return (
    <RNCamera
      ref={ref => {
        setCamera(ref);
      }}
      style={styles.preview}>
      <CaptureButton
        buttonDisabled={loading}
        onClick={takePicture}
        title="Capture"
      />
    </RNCamera>
  );
};

export default Camera;

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: height,
    width: width,
  },
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
