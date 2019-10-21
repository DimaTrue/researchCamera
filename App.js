import React from 'react';
import { StyleSheet, View } from 'react-native';

import Camera from './src/components/Camera';
import AppNav from './src/navigation/AppNavigator';
import MAinScreen from './src/Screens/MainScreen';
import MainScreen from './src/Screens/MainScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    process.nextTick = setImmediate;
  }

  render() {
    return (
      // <View style={styles.container}>
      //<MainScreen />
      <AppNav />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
