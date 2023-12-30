export interface CommentTagItem {
  count:     number;
  movieId:   number;
  position:  number;
  recommend: boolean;
  tag:       number;
  tagName:   string;
  type:      number;
}

export interface HotReply {
  channelId:          number;
  commentId:          number;
  content:            string;
  deleted:            boolean;
  gender:             number;
  id:                 number;
  isTop:              number;
  likedByCurrentUser: boolean;
  nick:               string;
  time:               number;
  ugcType:            number;
  upCount:            number;
  userId:             number;
  userLevel:          number;
  vipType:            number;
}

export interface IdAndScWithMovie {
  id: number;
  sc: number;
}

export interface TagListItem {
  id:   number;
  name: string;
}

export interface Topic {
  id:         number;
  isBind:     boolean;
  keyWords:   string[];
  markObject: number;
  name:       string;
  showTopic:  boolean;
}

export interface CommentItem {
  avatarUrl:          string;
  buyTicket:          boolean;
  channelId:          number;
  content:            string;
  delete:             boolean;
  follow:             boolean;
  gender:             number;
  hotReply?:          HotReply;
  id:                 number;
  imageUrls:          any[];
  imax:               boolean;
  ipLocName:          string;
  likedByCurrentUser: boolean;
  major:              boolean;
  movie:              IdAndScWithMovie;
  movieId:            number;
  nick:               string;
  replyCount:         number;
  score:              number;
  showApprove:        boolean;
  showVote:           boolean;
  spoiler:            boolean;
  startTime:          string;
  tagList:            TagListItem[];
  time:               number;
  ugcType:            number;
  upCount:            number;
  userId:             number;
  userLevel:          number;
  vipType:            number;
  topic?:             Topic;
  vipInfo?:           string;
}