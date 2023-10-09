import axios from 'axios';
import { Constants, Functions } from './imports.utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { serverUrl } from './constants.utils';

export const instance = () => {
  const data = axios.create({
    baseURL: serverUrl()+"/api/v1", 
    withCredentials: false,
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
      }
  });
  
  data.interceptors.request.use(async function (config) {
    const accessToken = await AsyncStorage.getItem('token');
    config.headers['authorization'] = accessToken;
    let server = await AsyncStorage.getItem('server');
    if(server){
      config.baseURL = server+"/api/v1"
    }
    return config;
  });
  return data;
};

export default instance;
