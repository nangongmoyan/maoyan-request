import { pathMap } from "../../config"
import { instanceMap } from "../../instance"
import { MaoYanResponse } from "../../types"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"
import { CityData, CityRequest, HomeTabItem, HomeTabRequest } from "./types"


const apiRequest = instanceMap.get('api')?.request!
const nangongmoyanRequest = instanceMap.get('nangongmoyan')?.request!
/** 配置相关的api */
export const deployApi = {
  /**
   * 首页Tab
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  homeTab: async(vo: HomeTabRequest): Promise<MaoYanResponse<HomeTabItem[]>> => {
    return mapYanTryCatch<MaoYanResponse<HomeTabItem[]>>(apiRequest<HomeTabRequest, HomeTabItem[]>({
      vo,
      url: pathMap.deployApi.homeTab(),
      key: createRequestKey('deployApi', 'homeTab'),
    }).then(rlt => rlt ?? {}))
  },

  /**
   * 城市数据
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  city: async(vo: CityRequest): Promise<CityData> => {
    return mapYanTryCatch<CityData>(nangongmoyanRequest<CityRequest, CityData>({
      vo,
      url: pathMap.deployApi.city(),
      key: createRequestKey('deployApi', 'city'),
    }).then(rlt => (rlt ?? {}) as unknown as CityData))
  },

}