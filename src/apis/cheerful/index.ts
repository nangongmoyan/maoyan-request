import { pathMap } from "../../config"
import instanceMap from "../../instance"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"

const wxRequest = instanceMap.get('wx')?.request!
const apiRequest = instanceMap.get('api')?.request!

/** 玩乐相关的Api*/
export const cheerfulApi = {
  /**
   * 密室逃脱
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  secretRoom: async(vo: Cheerful.SecretRoom.Request): Promise<RequestBase.MaoYanResponse<Cheerful.SecretRoom.Data>> => {
    return mapYanTryCatch<RequestBase.MaoYanResponse<Cheerful.SecretRoom.Data>>(apiRequest<Cheerful.SecretRoom.Request, Cheerful.SecretRoom.Data>({
      vo,
      cityProperty: 'cityId',
      url: pathMap.cheerfulApi.secretRoom(),
      key: createRequestKey('cheerfulApi', 'secretRoom'),
    }).then(rlt => rlt ?? {}))
  },

  /**
   * 精彩玩乐
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  wonderShow: async(vo: Cheerful.WonderShow.Request): Promise<RequestBase.MaoYanResponse<Cheerful.WonderShow.Data>> => {
    return mapYanTryCatch<RequestBase.MaoYanResponse<Cheerful.WonderShow.Data>>(wxRequest<Cheerful.WonderShow.Request, Cheerful.WonderShow.Data>({
      vo,
      suffix:'',
      cityProperty: 'cityId',
      url: pathMap.cheerfulApi.wonderShow(),
      key: createRequestKey('cheerfulApi', 'wonderShow'),
    }).then(rlt => rlt ?? {}))
  },

  /**
   * 沉浸剧场
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  scriptKill: async(vo: Cheerful.ScriptKill.Request): Promise<RequestBase.MaoYanResponse<Cheerful.ScriptKill.Data>> => {
    return mapYanTryCatch<RequestBase.MaoYanResponse<Cheerful.ScriptKill.Data>>(wxRequest<Cheerful.ScriptKill.Request, Cheerful.ScriptKill.Data>({
      vo,
      suffix:'',
      cityProperty: 'cityId',
      url: pathMap.cheerfulApi.scriptKill(),
      key: createRequestKey('cheerfulApi', 'scriptKill'),
    }).then(rlt => rlt ?? {}))
  },
}