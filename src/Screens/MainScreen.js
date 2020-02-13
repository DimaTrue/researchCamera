import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BlurOverlay, {
  closeOverlay,
  openOverlay,
} from 'react-native-blur-overlay';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as colors from '../constants/colors';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  renderBlurChilds() {
    return (
      <View style={styles.image}>
        <Text style={styles.blurContent}>Recognition</Text>

        <Icon size={25} color="red" name="rocket" />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.content}>Try Something</Text>

        <BlurOverlay
          radius={10}
          downsampling={22}
          brightness={-100}
          onPress={() => {
            closeOverlay();
          }}
          customStyles={styles.blur}
          blurStyle="extraLight"
          children={this.renderBlurChilds()}
        />
        <TouchableOpacity
          onPress={() => {
            openOverlay();
          }}
          style={styles.button}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BACKGROUND_COLOR,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  content: {
    textAlign: 'center',
    color: colors.TEXT,
    marginBottom: 5,
  },
  blurContent: {
    textAlign: 'center',
    fontSize: 25,
    color: colors.WHITE,
    marginBottom: 5,
  },
  button: {
    width: 90,
    height: 36,
    backgroundColor: colors.BUTTON,
    borderRadius: 4,
    margin: 16,
  },
  blur: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
