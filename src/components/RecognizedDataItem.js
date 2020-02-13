import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import * as colors from '../constants/colors';

const { width } = Dimensions.get('screen');

const RecognizedDataItem = ({ name, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.value}>{Math.floor(value * 100)} %</Text>
    </View>
  );
};

export default RecognizedDataItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    width: width - 20,
    marginVertical: 3,
  },
  name: {
    fontSize: 20,
    padding: 20,
    color: colors.ACTIVE_TINT_COLOR,
  },
  value: {
    fontSize: 20,
    padding: 20,
  },
});
