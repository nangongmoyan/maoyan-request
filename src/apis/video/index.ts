import { pathMap } from "../../config"
import { instanceMap } from "../../instance"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"

const vodMovieRequest = instanceMap.get('vodMovie')?.request!

/** 视频相关的api */
export const videoApi = {
  /**
   * 猫眼放映厅
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  onlineMovies: async(vo: Video.OnlineMovies.Request): Promise<RequestBase.MaoYanResponse<Video.OnlineMovies.Data>> => {
    return mapYanTryCatch<RequestBase.MaoYanResponse<Video.OnlineMovies.Data>>(vodMovieRequest<Video.OnlineMovies.Request, Video.OnlineMovies.Data>({
      vo,
      url: pathMap.videoApi.onlineMovies(),
      key: createRequestKey('videoApi', 'onlineMovies'),
    }).then(rlt => rlt ?? {}))
  },
}