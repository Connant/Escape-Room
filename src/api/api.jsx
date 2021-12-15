import axios from 'axios';

const BACKEND_URL = 'http://192.168.0.107:3001';
const REQUEST_TIMEOUT = 5000;


const createAPI = () => {
  const api = axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
})
  return api;
}

export const api = createAPI();


