import { pathMap } from "../../config"
import { instanceMap } from "../../instance"
import { MaoYanResponse } from "../../types"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"
import { SightsData, SightsRequest } from "./types"

const apiRequest = instanceMap.get('api')?.request!
/** 景点相关的api */
export const attractionApi = {
  /**
 * 景点门票
 * @author nangongmoyan
 * @param vo 
 * @returns 
 */
  sights: async(vo: SightsRequest): Promise<MaoYanResponse<SightsData>> => {
    return mapYanTryCatch<MaoYanResponse<SightsData>>(apiRequest<SightsRequest, SightsData>({
      vo,
      cityProperty: 'cityId',
      url: pathMap.attractionApi.sights(),
      key: createRequestKey('attractionApi', 'sights'),
    }).then(rlt => rlt ?? {}))
  },
}