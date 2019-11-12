import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  NativeModules,
  NativeEventEmitter,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Counter from '../service/Counter';

Counter.addListener('onIncrement', res => {
  console.warn('event onIncrement', res);
});
Counter.increment();
Counter.decrement();
Counter.decrement();

const MainScreen = () => {
  //   const getNumber = () =>
  //     Counter.getCount((count, ...other) => {
  //       console.warn('count is', count);
  //       console.warn('other is', other);
  //     });

  //   const decrease = () => {
  //     Counter.decrement()
  //       .then(res => console.warn(res))
  //       .catch(e => console.warn(e.message, e.code));
  //   };
  // console.warn('SWIFT', Counter);

  return (
    <View style={styles.container}>
      <Text>MainScreen</Text>
      <Icon name="rocket" size={30} color="#900" />
      <TouchableOpacity onPress={() => {}}>
        <Text>INCREMENT</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text>CONSOLE_SHOW</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text>DECREASE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
