import React from 'react';
import { View, Text } from 'react-native';

const RecognizedDataItem = ({ name, value }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{value}</Text>
    </View>
  );
};

export default RecognizedDataItem;
