import React from 'react';
import { StyleSheet, Button, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

const CaptureButton = ({ buttonDisabled, onClick, title }) => {
  return (
    <TouchableHighlight style={styles.captureButton} disabled={buttonDisabled}>
      <Button onPress={onClick} disabled={buttonDisabled} title={title} />
    </TouchableHighlight>
  );
};

export default CaptureButton;

CaptureButton.defaultProps = {
  buttonDisabled: false,
  onClick: () => {},
  title: '',
};

CaptureButton.propTypes = {
  buttonDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  captureButton: {
    marginBottom: 30,
    width: 160,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
