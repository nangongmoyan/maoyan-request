import { pathMap } from "../../config"
import { instanceMap } from "../../instance"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"

const apiRequest = instanceMap.get('api')?.request!
/** 景点相关的api */
export const attractionApi = {
  /**
 * 景点门票
 * @author nangongmoyan
 * @param vo 
 * @returns 
 */
  sights: async(vo: Attraction.Sights.Request): Promise<RequestBase.MaoYanResponse<Attraction.Sights.Data>> => {
    return mapYanTryCatch<RequestBase.MaoYanResponse<Attraction.Sights.Data>>(apiRequest<Attraction.Sights.Request, Attraction.Sights.Data>({
      vo,
      cityProperty: 'cityId',
      url: pathMap.attractionApi.sights(),
      key: createRequestKey('attractionApi', 'sights'),
    }).then(rlt => rlt ?? {}))
  },
}