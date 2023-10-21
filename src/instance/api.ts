import Request from "../request";
import { maoYan } from "../maoyan";

export const apiInstance = new Request(maoYan.configMap.api)

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {MaoYanRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
export const apiRequest = <D = any, T = any>(config: MaoYanRequestConfig<D, T>) => {
  const { method = 'GET' } = config
  if (method === 'get' || method === 'GET') {
    config.params = config.vo
  } else if (method === 'post' || method === 'POST'){
    config.data = config.vo
  }
  return apiInstance.request<MaoYanResponse<T>>(config)
}