import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStatusBarHeight } from 'react-native-status-bar-height';

// font family
export const regular = 'OpenSans-Regular';
export const bold = 'OpenSans-Bold';
export const italic = 'OpenSans-Italic';
export const boldItalic = 'OpenSans-BoldItalic';
export const semiBold = 'OpenSans-SemiBold';
export const lightItalic = "OpenSans-LightItalic"
export const semiBoldItalic = "OpenSans-SemiBoldItalic"

// App Constants
export const statusBarHeight = getStatusBarHeight();

export const serverUrl = () => {
  let endpoint = 'http://192.168.1.9:4000';
  return endpoint;
};
