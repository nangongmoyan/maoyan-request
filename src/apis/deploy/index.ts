import { pathMap } from "../../config"
import instanceMap from "../../instance"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"


const apiRequest = instanceMap.get('api')?.request!
/** 配置相关的api */
export const deployApi = {
  homeTab: async(vo: Deploy.HomeTab.Request): Promise<RequestBase.MaoYanResponse<Deploy.HomeTab.HomeTabItem[]>> => {
    return mapYanTryCatch<RequestBase.MaoYanResponse<Deploy.HomeTab.HomeTabItem[]>>(apiRequest<Deploy.HomeTab.Request, Deploy.HomeTab.HomeTabItem[]>({
      vo,
      url: pathMap.deployApi.homeTab(),
      key: createRequestKey('deployApi', 'homeTab'),
    }).then(rlt => rlt ?? {}))
  },
}