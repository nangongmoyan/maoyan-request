import Request from "../request";
import { maoYan } from "../maoyan";
import { serverConfig } from "../config";
import { convertRequestConfig } from "./convertConfig";

const instanceMap = new Map<Server, {
  instance: Request,
  request: <D=any, T=any>(config: RequestBase.MaoYanRequestConfig<D, T>) => Promise<RequestBase.MaoYanResponse<T>>
}> ()

for( let key in serverConfig[maoYan.env]){
  const server: Server = key as Server
  const instance = new Request({})
  const request = <D=any, T=any>(config: RequestBase.MaoYanRequestConfig<D, T>) => {
    return instance.request<RequestBase.MaoYanResponse<T>>(convertRequestConfig(config, server))
  }
  instanceMap.set(server as Server , {
    instance,
    request
  }) 
}

export default instanceMap
