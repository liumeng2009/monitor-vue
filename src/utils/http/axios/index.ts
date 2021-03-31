import axios from 'axios';
import moment from 'moment';
import { notification } from 'ant-design-vue';

const request = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 10 * 1000,
});

// 异常拦截处理器
const errorHandler = (error: any) => {
  if (error.response) {
    const data = error.response.data;
    // 从 localstorage 获取 token
    if (error.response.status === 403) {
      notification.error({
        message: '拒绝访问',
        description: data.message,
      });
    } else if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      notification.error({
        message: '没有权限',
        description: '权限验证失败',
      });
    } else {
      notification.error({
        message: '错误',
        description: error.toString(),
      });
    }
  } else {
    if (error.toString() !== 'Cancel') {
      notification.error({
        message: '错误',
        description:
          error.message && error.message === 'Network Error' ? '网络请求超时' : error.toString(),
      });
    }
  }
  return Promise.reject(error);
};

// request interceptor
request.interceptors.request.use((config) => {
  const timestamp = moment().valueOf();
  config.params = {
    timestamp: timestamp,
    ...config.params,
  };
  return config;
}, errorHandler);

// response interceptor
request.interceptors.response.use((response) => {
  return new Promise((resolve, reject) => {
    const data = response.data;
    console.log(data);
    if (data.code === 500 || data.code === 405) {
      // reject(data.message)
      notification.error({
        message: '错误',
        description: data.message || '接口请求错误',
      });
      reject(data);
    }
    resolve(data);
  });
}, errorHandler);

export default request;
