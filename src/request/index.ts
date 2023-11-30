import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios"
import { createErrorInformation, createMaoYanError, prevHandleRequestReject } from "../utils/request"
import { get } from "moyan-utils"

class Request {
  /** axios实例 */
  instance: AxiosInstance
  /** 存放取消请求控制器Map */
  abortControllerMap: Map<string, AbortController>
  /** 拦截器对象 */
  interceptorsObj?: RequestBase.RequestInterceptors<AxiosResponse>


  constructor (config: RequestBase.CreateRequestConfig){
    this.instance = axios.create(config)

    // 初始化存放取消请求控制器Map
    this.abortControllerMap = new Map()
    this.interceptorsObj = config.interceptors

    // 拦截器执行顺序 接口请求 -> 实例请求 -> 全局请求 -> 实例响应 -> 全局响应 -> 接口响应
    this.instance.interceptors.request.use(
      (req: AxiosRequestConfig) => {
        const controller = new AbortController()
        const url = req.url || ''
        req.signal = controller.signal
        this.abortControllerMap.set(url, controller)
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
        const url = res.config.url || ''
        this.abortControllerMap.delete(url)
        return res.data
      },
      (error: any) => {
        return error
      }
    )
  }

  request<T= any>(config: RequestBase.RequestConfig<T> & {key: string}):Promise<T>{
    return new Promise((resolve, reject) => {
      /** 如果我们为单个请求设置拦截器，这里使用单个请求的拦截器 */
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config as any)
      }

      prevHandleRequestReject<T>(config, reject)

      this.instance
      .request<any, T>(config)
      .then(res => {
        /** 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器 */
        if (config.interceptors?.responseInterceptors) {
          res = config.interceptors.responseInterceptors(res)
        }
        
       // @ts-ignore
        const error = get(res, 'error') as RequestBase.MaoYanErrResponse1
        if(error ){
          reject(createMaoYanError(createErrorInformation(error?.code ?? 999999, config.key,  error?.message ?? '')))
        }else {
          resolve(res)
        }
      }).catch((error: any)=> {
        reject(error)
      })
    })
  }

  /**
 * 取消全部请求
 */
  cancelAllRequest() {
    for (const [, controller] of this.abortControllerMap) {
      controller.abort()
    }
    this.abortControllerMap.clear()
  }

  /**
 * 取消指定的请求
 * @param url 待取消的请求URL
 */
  cancelRequest(url: string | string[]) {
    const urlList = Array.isArray(url) ? url : [url]
    for (const _url of urlList) {
      this.abortControllerMap.get(_url)?.abort()
      this.abortControllerMap.delete(_url)
    }
  }
}


export default Request