import axios, { AxiosInstance, AxiosResponse } from "axios"
import { CreateRequestConfig, RequestConfig } from "./type"

class Request {

  /** axios实例 */
  instance: AxiosInstance

  constructor (config: CreateRequestConfig){
    this.instance = axios.create(config)

    /** 全局响应拦截器保证最后执行 */
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res.data
      },
      (error: any) => error
    )
  }

  request<T>(config: RequestConfig<T>):Promise<T>{
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then(res => {
          resolve(res)
        }).catch((error: any)=> {
          reject(error)
        })
    })
  }
}


export default Request