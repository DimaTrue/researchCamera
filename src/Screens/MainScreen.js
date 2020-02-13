import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { GENERAL } from '../constants/recognition-types';

class MainScreen extends Component {
  state = {
    recognitionType: GENERAL,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Recognize</Text>
        <Icon size={25} color="red" name="rocket" />
      </View>
    );
  }
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    backgroundColor: 'grey',
    margin: 20,
    padding: 20,
  },
  activeButton: {
    backgroundColor: 'blue',
  },
});
