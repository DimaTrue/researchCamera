import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  NativeModules,
  NativeEventEmitter,
  TouchableOpacity,
  requireNativeComponent,
  UIManager,
  findNodeHandle
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Counter from "../service/Counter";
import CounterView from "../components/CounterView";

Counter.addListener("onIncrement", res => {
  console.warn("event onIncrement", res);
});
Counter.increment();
Counter.decrement();
Counter.decrement();

class MainScreen extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    count: 1
  };

  increment = () => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ count: this.state.count + 1 });
  };

  update = e => {
    this.setState({ count: e.count });
  };

  updateNative = () => {
    this.counterRef.update(this.state.count);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.wrapper, styles.border]}
          onPress={this.increment}
          onLongPress={this.updateNative}
        >
          <Text style={styles.button}>{this.state.count}</Text>
          <Icon name="rocket" size={30} color="#900" />
        </TouchableOpacity>
        <CounterView
          style={styles.wrapper}
          count={2222}
          onUpdate={this.update}
          // eslint-disable-next-line no-return-assign
          ref={e => (this.counterRef = e)}
        />
      </View>
    );
  }
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch"
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  border: {
    borderColor: "#eee",
    borderBottomWidth: 1
  },
  button: {
    fontSize: 50,
    color: "orange"
  }
});
