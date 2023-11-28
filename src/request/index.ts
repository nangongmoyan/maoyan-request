import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios"
import { prevHandleRequestReject } from "../utils/request"

class Request {
  /** axios实例 */
  instance: AxiosInstance
  /** 拦截器对象 */
  interceptorsObj?: RequestBase.RequestInterceptors<AxiosResponse>

  constructor (config: RequestBase.CreateRequestConfig){
    this.instance = axios.create(config)

    this.interceptorsObj = config.interceptors

    // 拦截器执行顺序 接口请求 -> 实例请求 -> 全局请求 -> 实例响应 -> 全局响应 -> 接口响应
    this.instance.interceptors.request.use(
      (req: AxiosRequestConfig) => {
        return req
      },
      (error: any) => {
        return error
      }
    )

    /** 使用实例拦截器 */
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch,
    )
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch,
    )

    /** 全局响应拦截器保证最后执行 */
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res.data
      },
      (error: any) => {
        return error
      }
    )
  }

  request<T>(config: RequestBase.RequestConfig<T> & {key: string}):Promise<T>{
    return new Promise((resolve, reject) => {
      /** 如果我们为单个请求设置拦截器，这里使用单个请求的拦截器 */
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config as any)
      }

      console.log({config})

      prevHandleRequestReject<T>(config, reject)

      this.instance
      .request<any, T>(config)
      .then(res => {
        /** 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器 */
        if (config.interceptors?.responseInterceptors) {
          res = config.interceptors.responseInterceptors(res)
        }
        resolve(res)
      }).catch((error: any)=> {
        reject(error)
      })
    })
  }
}


export default Request