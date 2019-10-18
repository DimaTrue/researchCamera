import React from 'react';
import { StyleSheet, Button, TouchableHighlight } from 'react-native';

const CaptureButton = ({ buttonDisabled, onClick }) => {
  return (
    <TouchableHighlight style={styles.captureButton} disabled={buttonDisabled}>
      <Button
        onPress={onClick}
        disabled={buttonDisabled}
        title="Capture"
        accessibilityLabel="Learn more about this button"
      />
    </TouchableHighlight>
  );
};

export default CaptureButton;

const styles = StyleSheet.create({
  captureButton: {
    marginBottom: 30,
    width: 160,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
