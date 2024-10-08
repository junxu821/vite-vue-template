import axios from "axios";
import type { AxiosInstance } from "axios";
import { getToken, removeToken } from "./storage";
import router from "@/router";
//使用指定配置创建axios实例
const request: AxiosInstance = axios.create({
  // 基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 请求超时时间
  timeout: 60000,
});

request.interceptors.request.use(
  (config) => {
    // 某些接口不需token时
    if (getToken()) {
      config.headers.token = getToken();
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    Promise.reject(error);
  }
);

// response 拦截器
request.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    const res = response.data;
    if (res.code === 200) {
      // 分页
      if (res.data && res.data.rows) {
        res.data.total = Number(res.data.total);
      }
      return res;
    } else {
      // ElMessage.error(res.msg);
      // 未授权
      if (res.code === 401) {
        removeToken()
        router.replace("/login");
      }
      return Promise.reject(res.msg);
    }
  },
  (error) => {
    // 对响应错误做点什么
    // ElMessage.error("系统内部错误");
    return Promise.reject(error);
  }
);
export default request
export const post = <T>(url: string, data = {}, ext = {}): ApiRes<T> => request({
  url,
  method: 'POST',
  data,
  ...ext
})
export const get = <T>(url: string, params = {}, ext = {}): ApiRes<T> => request({
  url,
  method: 'GET',
  params,
  ...ext
})
export const remove = <T>(url: string, data = {}, ext = {}): ApiRes<T> => request({
  url,
  method: 'DELETE',
  data,
  ...ext
})
export const put = <T>(url: string, data = {}, ext = {}): ApiRes<T> => request({
  url,
  method: 'PUT',
  data,
  ...ext
})
