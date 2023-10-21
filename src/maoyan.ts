import { config } from "./config"

class MaoYan {
  configMap: ConfigMap 
  timeout: number
  constructor(){
    this.timeout = 20 * 1000
    this.configMap = {
      wx:{
        timeout: this.timeout,
        baseURL: config.host.wx,
      },
      ad:{
        timeout: this.timeout,
        baseURL: config.host.ad,
      },
      iwx:{
        timeout: this.timeout,
        baseURL: config.host.iwx,
      },
      api:{
        timeout: this.timeout,
        baseURL: config.host.api,
      },
      monitor:{
        timeout: this.timeout,
        baseURL: config.host.monitor,
      },
      vodMovie:{
        timeout: this.timeout,
        baseURL: config.host.vodMovie,
      },
    }
  }


  setConfigMap(server: Server, config: CreateRequestConfig){
    this.configMap = {
      ...this.configMap,
      [server]: {
        ...this.configMap[server],
        ...config,
      }
    }
    return this
  }

  setTimeOut (timeout: number){
    this.timeout = timeout
    return this
  }
}


const maoYan = new MaoYan()

export { maoYan }