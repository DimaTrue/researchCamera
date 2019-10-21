import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MainScreen</Text>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
