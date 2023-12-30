import { pathMap } from "../../config"
import { instanceMap } from "../../instance"
import { MaoYanResponse, ReplyBaseItem } from "../../types"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"
import { ReplyRequest } from "./types"

const apiRequest = instanceMap.get('api')?.request!

/** 回复相关的api */
export const replyApi = {
  /**
   * 回复列表
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  replies: async(vo: ReplyRequest): Promise<MaoYanResponse<ReplyBaseItem[]>> => {
    return mapYanTryCatch<MaoYanResponse<ReplyBaseItem[]>>(apiRequest<ReplyRequest, ReplyBaseItem[]>({
      vo,
      url: pathMap.replyApi.replies(),
      key: createRequestKey('replyApi', 'replies'),
    }).then(rlt => rlt ?? {}))
  },
}