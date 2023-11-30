namespace Comment {
  namespace HotTag {
    interface Request {
      movieId: number // 影片id
    }

    interface Data {
      fixedTags: CommentBase.CommentTagItem[];
      hotTags:   CommentBase.CommentTagItem[];
    }
  }

  namespace TagAndTopic {
    interface Request {

    }

    interface TagAndTopicItem {
      count:     number;
      movieId:   number;
      position:  number;
      recommend: boolean;
      tag:       number;
      tagName:   string;
      type:      number;
    }
    
    interface Data {

    }
  }

  namespace Comments {
    interface Request {
      movieId: number // 影片id
      limit: number //
      offset: number
    }

    interface MyComment {
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

  
    interface Data {
      hotIds:      number[];
      total:       number;
      hotComments: CommentBase.CommentItem[];
      t2total:     number;
      myComment:   MyComment;
    }
  }

  namespace HotTopic {
    interface Request {
      movieId: number // 影片id
    }

    interface TopicList {
      commentCount: number;
      headUrls?:    string[];
      hotComment:   CommentBase.CommentItem;
      tag:          number;
      topicContent: string;
      topicId:      number;
      topicName:    string;
      viewCount:    number;
    }

    interface Data {
      commentCount: number;
      count:        number;
      moviePhoto:   string;
      topicList:    TopicList[];
      users:        UserBase.UserItem[];
    }
  }

  namespace Information {
    interface Request {
      commentId: number // 评论id
      userId: number // 用户id
    }

    interface Data {}
  }
}