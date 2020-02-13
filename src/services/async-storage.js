import AsyncStorage from '@react-native-community/async-storage';

export const getRecognitionType = () => AsyncStorage.getItem('recognitionType');

export const setRecognitionType = value =>
  AsyncStorage.setItem('recognitionType', JSON.stringify(value));

export const getUserToken = () => AsyncStorage.getItem('userToken');

export const setUserToken = value =>
  AsyncStorage.setItem('userToken', JSON.stringify(value));
