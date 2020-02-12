import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import RecognizedDataItem from '../components/RecognizedDataItem';

const DidSnapshotScreen = ({ navigation }) => {
  const recognizedData = navigation.getParam('identifiedImage');

  const keyExtractor = ({ id }) => id;
  const renderItem = ({ item }) => (
    <RecognizedDataItem name={item.name} value={item.value} />
  );

  if (recognizedData?.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Recognized Data</Text>
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

export default DidSnapshotScreen;

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
