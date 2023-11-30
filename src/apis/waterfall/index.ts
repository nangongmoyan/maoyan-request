import { pathMap } from "../../config"
import instanceMap from "../../instance"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"

const apiRequest = instanceMap.get('api')?.request!
/** 瀑布流相关api */
export const waterfallApi = {
  /**
   * 瀑布流
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  feedChannel: async(vo: Waterfall.FeedChannel.Request): Promise<RequestBase.MaoYanResponse<Waterfall.FeedChannel.Data>> => {
    return mapYanTryCatch<RequestBase.MaoYanResponse<Waterfall.FeedChannel.Data>>(apiRequest<Waterfall.FeedChannel.Request, Waterfall.FeedChannel.Data>({
      vo,
      cityProperty: 'cityId',
      url: pathMap.waterfallApi.feedChannel(),
      key: createRequestKey('waterfallApi', 'feedChannel'),
    }).then(rlt => rlt ?? {}))
  },

}