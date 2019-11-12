/* eslint-disable no-return-assign */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  requireNativeComponent,
  UIManager,
  findNodeHandle
} from 'react-native';
import PropTypes from 'prop-types';

const COMPONENT_NAME = 'CounterView';
const RNCounterView = requireNativeComponent(COMPONENT_NAME);

export default class CounterView extends Component {
  // eslint-disable-next-line react/no-typos
  static PropTypes = {
    count: PropTypes.number,
    onUpdate: PropTypes.func
  };

  _onUpdate = event => {
    if (this.props.onUpdate) {
      this.props.onUpdate(event.nativeEvent);
    }
  };

  render() {
    const { count, style } = this.props;
    return (
      <RNCounterView
        style={style}
        count={count}
        onUpdate={this._onUpdate}
        ref={ref => (this.ref = ref)}
      />
    );
  }

  update = (...args) => {
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(this.ref),
      UIManager[COMPONENT_NAME].Commands.updateFromManager,
      [...args]
    );
  };
}

const styles = StyleSheet.create({});
