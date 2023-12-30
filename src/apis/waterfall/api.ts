import { pathMap } from "../../config"
import { instanceMap } from "../../instance"
import { MaoYanResponse } from "../../types"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"
import { FeedChannelData, FeedChannelRequest } from "./types"

const apiRequest = instanceMap.get('api')?.request!
/** 瀑布流相关api */
export const waterfallApi = {
  /**
   * 瀑布流
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  feedChannel: async(vo: FeedChannelRequest): Promise<MaoYanResponse<FeedChannelData>> => {
    return mapYanTryCatch<MaoYanResponse<FeedChannelData>>(apiRequest<FeedChannelRequest, FeedChannelData>({
      vo,
      cityProperty: 'cityId',
      url: pathMap.waterfallApi.feedChannel(),
      key: createRequestKey('waterfallApi', 'feedChannel'),
    }).then(rlt => rlt ?? {}))
  },

}