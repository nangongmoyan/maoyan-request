import { CommentItem, CommentTagItem, UserItem } from "../../types";

/* ------------------- 评论标签 ------------------ */
export interface HotTagRequest {
  movieId: number // 影片id
}

export interface HotTagData {
  fixedTags: CommentTagItem[];
  hotTags:   CommentTagItem[];
}

/* ------------------- 标签和主题 ------------------ */
export interface TagAndTopicRequest {}

export interface TagAndTopicItem {
  count:     number;
  movieId:   number;
  position:  number;
  recommend: boolean;
  tag:       number;
  tagName:   string;
  type:      number;
}

/* ------------------- 评论列表 ------------------ */
export interface CommentsRequest {
  movieId: number // 影片id
  limit: number //
  offset: number
}

export interface MyComment {
  buyTicket:          boolean;
  delete:             boolean;
  follow:             boolean;
  gender:             number;
  id:                 number;
  imax:               boolean;
  likedByCurrentUser: boolean;
  major:              boolean;
  movieId:            number;
  replyCount:         number;
  score:              number;
  showApprove:        boolean;
  showVote:           boolean;
  spoiler:            boolean;
  time:               number;
  ugcType:            number;
  upCount:            number;
  userId:             number;
  userLevel:          number;
  vipType:            number;
}

export interface CommentsData {
  hotIds:      number[];
  total:       number;
  hotComments: CommentItem[];
  t2total:     number;
  myComment:   MyComment;
}

/* ------------------- 热议话题 ------------------ */
export interface HotTopicRequest {
  movieId: number // 影片id
}

export interface TopicList {
  commentCount: number;
  headUrls?:    string[];
  hotComment:   CommentItem;
  tag:          number;
  topicContent: string;
  topicId:      number;
  topicName:    string;
  viewCount:    number;
}

export interface HotTopicData {
  commentCount: number;
  count:        number;
  moviePhoto:   string;
  topicList:    TopicList[];
  users:        UserItem[];
}

/* ------------------- 评论详情 ------------------ */
export interface CommentInformationRequest {
  commentId: number // 评论id
  userId: number // 用户id
}
