import React from 'react';
import AppNav from './src/navigation/AppNavigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    process.nextTick = setImmediate;
  }

  render() {
    return <AppNav />;
  }
}
