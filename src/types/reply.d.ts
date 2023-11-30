namespace ReplyBase {

  interface ReplyBaseItem {
    avatarUrl:          string;
    channelId:          number;
    commentId:          number;
    content:            string;
    deleted:            boolean;
    gender:             number;
    id:                 number;
    ipLocName:          string;
    isTop:              number;
    likedByCurrentUser: boolean;
    nick:               string;
    time:               number;
    ugcType:            number;
    upCount:            number;
    userId:             number;
    userLevel:          number;
    vipType:            number;
    ref?:               ReplyBaseItem;
    vipInfo?:           string;
  }
}