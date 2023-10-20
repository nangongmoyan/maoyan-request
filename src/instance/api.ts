import Request from "../request";
import { config } from "../config";
import { RequestConfig } from "../request/type";

interface ApiRequestConfig<T,R> extends RequestConfig<R>{
  vo?: T
}

export const apiInstance = new Request({
  baseURL: config.host.api,
  timeout: 1000 * 20,
})

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {ApiRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
export const apiRequest = <D = any, T = any>(config: ApiRequestConfig<D, T>) => {
  const { method = 'GET' } = config
  if (method === 'get' || method === 'GET') {
    config.params = config.vo
  } else if (method === 'post' || method === 'POST'){
    config.data = config.vo
  }
  return apiInstance.request<T>(config)
}