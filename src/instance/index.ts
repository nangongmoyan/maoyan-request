import { serverConfig } from "../config";
import { maoYan } from "../maoyan";
import Request from "../request";
import { MaoYanResponse, Server } from "../types";
import { convertRequestConfig } from "./convertConfig";

const instanceMap = new Map<Server, {
  instance: Request,
  request: <D=any, T=any>(config: MaoYanRequestConfig<D, T>) => Promise<MaoYanResponse<T>>
}> ()

for( let key in serverConfig[maoYan.env]){
  const server: Server = key as Server
  const instance = new Request({})
  const request = <D=any, T=any>(config: MaoYanRequestConfig<D, T>) => {
    return instance.request<MaoYanResponse<T>>(convertRequestConfig(config, server))
  }
  instanceMap.set(server as Server , {
    instance,
    request
  }) 
}

export { instanceMap };

