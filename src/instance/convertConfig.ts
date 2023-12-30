import { serverConfig } from "../config"
import { maoYan } from "../maoyan"
import { Server } from "../types"
import { removeUndefinedField } from "../utils/object"

export const convertRequestConfig = <D= any, T= any>(config: MaoYanRequestConfig<D, T>, server: Server ) => {

  const { method = 'GET', needProperty = {}, cityProperty = 'ci', suffix = '.json' } = config

  const { 
    uuid = true, 
    channelId = true,
    needCityId = true, 
  } = needProperty

  if(config.vo){
    if(uuid){
      config.vo = {...config.vo, uuid: maoYan.uuid}
    }

    if(channelId){
      config.vo = {...config.vo, channelId: maoYan.channelId}
    }

    if(needCityId && cityProperty){
      if(cityProperty === 'ci'){
        config.vo = {...config.vo, ci: maoYan.cityId}
      }else {
        config.vo = {...config.vo, cityId: maoYan.cityId}
      }
    }

    /** 移除对象中属性值为undefined */
    config.vo = removeUndefinedField(config.vo)
  }


  if (method === 'get' || method === 'GET') {
    config.params = config.vo
  } else if (method === 'post' || method === 'POST'){
    config.data = config.vo
  }

  config.baseURL = serverConfig[maoYan.env]?.[server]

  /** 统一给url添加后缀 */
  if(config.url){
    config.url = config.url + suffix
  }

  return config
}