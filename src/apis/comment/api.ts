import { pathMap } from "../../config"
import { instanceMap } from "../../instance"
import { CommentItem, MaoYanResponse } from "../../types"
import { createRequestKey, mapYanTryCatch } from "../../utils/request"
import { CommentInformationRequest, CommentsData, CommentsRequest, HotTagData, HotTagRequest, HotTopicData, HotTopicRequest, TagAndTopicItem, TagAndTopicRequest } from "./types"

const apiRequest = instanceMap.get('api')?.request!
/** 评论相关的api */
export const commentApi = {

  /**
   * 评论标签
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  hotTag: async(vo: HotTagRequest): Promise<HotTagData> => {
    return mapYanTryCatch<HotTagData>(apiRequest<HotTagRequest, HotTagData>({
      vo,
      url: pathMap.commentApi.hotTag(),
      key: createRequestKey('commentApi', 'hotTag'),
    }).then(rlt => rlt.data ?? {}))
  },

  /**
   * 标签和主题
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  tagAndTopic: async(vo: TagAndTopicRequest): Promise<TagAndTopicItem[]> => {
    return mapYanTryCatch<TagAndTopicItem[]>(apiRequest<TagAndTopicRequest, TagAndTopicItem[]>({
      vo,
      url: pathMap.commentApi.tagAndTopic(),
      key: createRequestKey('commentApi', 'tagAndTopic'),
    }).then(rlt => rlt.data ?? []))
  },

  /**
   * 评论列表
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  comments: async(vo: CommentsRequest): Promise<MaoYanResponse<CommentsData>> => {
    return mapYanTryCatch<MaoYanResponse<CommentsData>>(apiRequest<CommentsRequest, CommentsData>({
      vo,
      url: pathMap.commentApi.comments(),
      key: createRequestKey('commentApi', 'comments'),
    }).then(rlt => rlt ?? {}))
  },

  /**
   * 热议话题
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  hotTopic: async(vo: HotTopicRequest): Promise<HotTopicData> => {
    return mapYanTryCatch<HotTopicData>(apiRequest<HotTopicRequest, HotTopicData>({
      vo,
      url: pathMap.commentApi.hotTopic(),
      key: createRequestKey('commentApi', 'hotTopic'),
    }).then(rlt => rlt.data ?? {}))
  },

  /**
   * 评论详情
   * @author nangongmoyan
   * @param vo 
   * @returns 
   */
  information: async(vo: CommentInformationRequest): Promise<CommentItem> => {
    return mapYanTryCatch<CommentItem>(apiRequest<CommentInformationRequest, CommentItem>({
      vo,
      url: pathMap.commentApi.information(),
      key: createRequestKey('commentApi', 'information'),
    }).then(rlt => rlt.data ?? {}))
  },
}