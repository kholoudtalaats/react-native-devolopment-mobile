import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import {SAVED_KEY} from '@hookform/resolvers';
const axiosClient = axios.create({
    baseURL:'https://api.github.com',
    headers: {
        "avatar_url": "https://avatars.githubusercontent.com/u/1825798?v=4",
        "html_url": "https://github.com/1?profile=user1",
        "location": "San Francisco, CA",
        "name": "Michael",
    },
 })
  
 /*axiosClient.interceptors.request.use( async (config) => {
    const value = await SecureStore.getItemAsync(SAVED_KEY);
    if (value) {
        const { token } = JSON.parse(value);
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
        };
    }
    return config;
 });*/
 axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        const {status} = JSON.parse(JSON.stringify(error));
        throw (status === 500 && 'Internal Server Error') || '';
    }
 );
 export default axiosClient;