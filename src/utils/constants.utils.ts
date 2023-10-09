import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStatusBarHeight } from 'react-native-status-bar-height';

// font family
export const regular = 'Inter-Regular';
export const bold = 'Inter-Bold';
export const light = 'Inter-Light';

// App Constants
export const statusBarHeight = getStatusBarHeight();

export const serverUrl = () => {
  let endpoint = 'http://192.168.1.9:4000';
  return endpoint;
};
