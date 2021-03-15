import axios from 'axios';

const baseConfig = {
  baseURL: `http://google.com/`,
  header: {
    Authorization: 'Bearer {token}'
  }
}

export const axiosInstance = axios.create(baseConfig);