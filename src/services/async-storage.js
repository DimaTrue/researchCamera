import AsyncStorage from '@react-native-community/async-storage';

export const getUserToken = () => AsyncStorage.getItem('userToken');

export const setUserToken = value =>
  AsyncStorage.setItem('userToken', JSON.stringify(value));
