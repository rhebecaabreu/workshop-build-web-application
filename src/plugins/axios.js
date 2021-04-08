import axios from 'axios';
import Vue from 'vue';
import store from '../store';

const baseConfig = {
  baseURL: `https://tasks.googleapis.com`,
}

const axiosInstance = axios.create(baseConfig);

axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getters.getToken;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }, 
  (error) => {
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue) {
  Vue.axios = axiosInstance;
  window.axios = axiosInstance;
  Object.defineProperties(Vue.prototype, {
    $axios: {
      get() {
        return axiosInstance;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;