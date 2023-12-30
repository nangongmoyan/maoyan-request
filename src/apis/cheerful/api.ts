import { pathMap } from "../../config"
import { instanceMap } from "../../instance"
import { MaoYanResponse } from "../../types"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"
import { ScriptKillData, ScriptKillRequest, SecretRoomData, SecretRoomRequest, WonderShowData, WonderShowRequest } from "./types"

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
  secretRoom: async(vo: SecretRoomRequest): Promise<MaoYanResponse<SecretRoomData>> => {
    return mapYanTryCatch<MaoYanResponse<SecretRoomData>>(apiRequest<SecretRoomRequest, SecretRoomData>({
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
  wonderShow: async(vo: WonderShowRequest): Promise<MaoYanResponse<WonderShowData>> => {
    return mapYanTryCatch<MaoYanResponse<WonderShowData>>(wxRequest<WonderShowRequest, WonderShowData>({
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
  scriptKill: async(vo: ScriptKillRequest): Promise<MaoYanResponse<ScriptKillData>> => {
    return mapYanTryCatch<MaoYanResponse<ScriptKillData>>(wxRequest<ScriptKillRequest, ScriptKillData>({
      vo,
      suffix:'',
      cityProperty: 'cityId',
      url: pathMap.cheerfulApi.scriptKill(),
      key: createRequestKey('cheerfulApi', 'scriptKill'),
    }).then(rlt => rlt ?? {}))
  },
}
