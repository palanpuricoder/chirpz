import { useState } from 'react';
import {
    Alert,
    Dimensions,
    LayoutAnimation,
    Linking,
    PermissionsAndroid,
    Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { serverUrl } from './constants.utils';

export const { width, height } = Dimensions.get('window');

export const aspectRatio = height / width;

export const getBaseURL = () => {
    let baseURL = 'http://localhost:4000/api/v1';
    return baseURL;
};

export const useSetState = (initialState: any) => {
    const [state, setState] = useState(initialState);

    const newSetState = (newState: any) => {
        setState((prevState: any) => ({ ...prevState, ...newState }));
    };
    return [state, newSetState];
};

export const Ratio = (value: any, isHeight?: boolean) => {
    let ratio;
    let aspectRatio = height / width;
    let scaleFactor = 375;

    if (aspectRatio < 1.8) {
        scaleFactor = 425;
    }

    if (isHeight) {
        if (typeof value === 'string') {
            value = value.replace('%', '');
            ratio = (parseInt(value) * height) / 100;
        } else {
            ratio = (value * height) / scaleFactor;
        }
    } else {
        if (typeof value === 'string') {
            value = value.replace('%', '');
            ratio = (parseInt(value) * width) / 100;
        } else {
            ratio = (value * width) / scaleFactor;
        }
    }
    return ratio;
};

export const Width = (value: number) => {
    return (value * width) / 100;
};

export const Height = (value: number) => {
    return (value * height) / 100;
};

export const FontSize = (value: any) => {
    let aspectRatio = height / width;
    return aspectRatio * value * 0.4;
};

export const modelError = (error: any) => {
    if (error?.response?.data?.message) {
      return error.response.data.message;
    } else if (error?.message) {
      return error?.message;
    } else if (error?.response) {
      return error?.response;
    } else {
      return error;
    }
  };

export const getItem = async (key: string) => {
    try {
        const data = await AsyncStorage.getItem(key);
        if (data) {
            return data;
        } else {
            null;
        }
    } catch (error) {
        return null;
    }
};

export const setItem = async (key: string, data: any) => {
    try {
        await AsyncStorage.setItem(key, data);
    } catch (error) {
        return null;
    }
};

export const removeItem = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        return null;
    }
};
