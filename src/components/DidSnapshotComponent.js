import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import RecognizedDataItem from './RecognizedDataItem';
import CaptureButton from './CaptureButton';

const DidSnapshotComponent = ({ recognizedData, reset }) => {
  const keyExtractor = ({ id }) => id;
  const renderItem = ({ item }) => (
    <RecognizedDataItem name={item.name} value={item.value} />
  );

  if (recognizedData?.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Recognized Data</Text>
        <CaptureButton title="Reset" onClick={reset} />
        <FlatList
          data={recognizedData}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>Sorry, Something went wrong.</Text>
      <Text>Try again</Text>
    </View>
  );
};

export default DidSnapshotComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    paddingVertical: 20,
  },
});
