import { pathMap } from "../../config"
import { instanceMap } from "../../instance"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"


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
  homeTab: async(vo: Deploy.HomeTab.Request): Promise<RequestBase.MaoYanResponse<Deploy.HomeTab.HomeTabItem[]>> => {
    return mapYanTryCatch<RequestBase.MaoYanResponse<Deploy.HomeTab.HomeTabItem[]>>(apiRequest<Deploy.HomeTab.Request, Deploy.HomeTab.HomeTabItem[]>({
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
  city: async(vo: Deploy.City.Request): Promise<Deploy.City.Data> => {
    return mapYanTryCatch<Deploy.City.Data>(nangongmoyanRequest<Deploy.City.Request, Deploy.City.Data>({
      vo,
      url: pathMap.deployApi.city(),
      key: createRequestKey('deployApi', 'city'),
    }).then(rlt => (rlt ?? {}) as unknown as Deploy.City.Data))
  },

}