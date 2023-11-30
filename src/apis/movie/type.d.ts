/** 电影 */
namespace MaoYanMovie {
  /** 响应类型1 */
  interface MovieResponeseOne {
    chiefBonus:     { [key: string]: MovieBase.ChiefBonus[] }; //
    coming:         MovieBase.MovieItem[]; //
    hot:            MovieBase.MovieItem[]; //
    movieIds:       number[]; //
    paging?:        MovieBase.Paging;
    recommendAds?:  MovieBase.RecommendAd[];
    schemaUrl:      string; //
    showLimit:      number; //
    stid:           string; //
    stids:          MovieBase.Stid[]; //
    total:          number; //
  }

  /** 正在热映 */
  namespace Hot {
    interface Request {
      utm_medium?:  string; //
      open?:        string; //
      homepage?:    string; // 
      extra?:       boolean; //
    }
  }

  /** 即将上映 */
  namespace ComingSoon {
    interface Request {
      uuid?:  string ; //
      extra?: boolean; //
    }
  }

  /** 待映推荐 */
  namespace ToBeScreened {
    interface Request {
      uuid?:      string ; //
      extra?:     boolean; //
      homepage?:  string; // 
    }
  }

  namespace Detail {
    interface Request {
      extra?: boolean // 额外数据
    }

    interface Data {
      movie: MovieBase.MovieDetail
    }
  }

  namespace PlayPlatform {
    interface Request {

    }

    interface Link {
      appPlayLink:    string;
      episodeNum:     number;
      fieldSource:    string;
      movieId:        number;
      platform:       number;
      playDuration:   number;
      playLink:       string;
      playPermission: number;
    }

    interface PlayPlatformItem {
      fieldSource:    string;
      iconUrl:        string;
      information:    string;
      isShow:         number;
      level:          number;
      links:          Link[];
      mgeType?:       string;
      movieId:        number;
      name:           string;
      netReleaseTime: Date;
      platform:       number;
      type:           number;
    }


    interface Data {

    }
  }

  namespace MoviePhotos {
    interface Request {
      type?: number
      topPhotoIds?: string
    }

    interface Photo {
      approve: number;
      id:      number;
      olink:   string;
      tlink:   string;
      type:    number;
    }

    interface PhotosItem {
      photos: Photo[];
      size:   number;
    }

    interface Data {

    }
  }

  namespace Reputation {
    interface Request {
      movieId: number
    }

    interface Data {
      content:        string;
      firstWord:      string;
      image:          string;
      jumperUrl:      string;
      movieBoardType: number;
      movieRank:      number;
      secondWord:     string;
      term:           number;
      year:           number;
    }
  }

  namespace RecommendTag {
    interface Request {
      movieId: number
    }
    interface Data {
      content: string;
      count:   string;
      left:    string;
      right:   string;
    }
  }

  namespace Distribution {
    interface Request {
      movieId: number
    }

    interface DistributionItem {
      level:      string;
      percent:    number;
      setLevel:   boolean;
      setPercent: boolean;
    }
  

    interface Data {
      schema:                   string;
      provinceIdstributionDesc: string;
      distribution:             DistributionItem[];
    }
  }


  namespace Celebrities {
    interface Request {

    }

    interface CelebritieItem {
      avatar:           string;
      cnm:              string;
      cr:               number;
      desc:             string;
      enm:              string;
      id:               number;
      ocr:              number;
      roles:            string;
      showAvatarDetail: boolean;
      still:            string;
      voice?:           string;
  }

  
    interface Data {
      total: number;
      list:  CelebritieItem[][];
    }
  }


  namespace Videos {
    interface Request {
      movieId: number // 电影id
      offset: number // 页数
      limit: number // 每页数量
      timeStamp: Date //时间戳
    }


    interface FeedItem extends MovieBase.FeedBaseItem {
      eventTracking: MovieBase.MovieEnum.EventTracking;
    }

    interface VideoCommendModuleVOListItem {
      moduleId:    number;
      moduleName:  string;
      schema:      string;
      videoCount:  number;
      videoImage?: string;
      index?:      number;
    }

    interface Data {
      feeds:                    FeedItem[];
      paging:                   Paging;
      timestamp:                number;
      videoCommendModuleVOList: VideoCommendModuleVOListItem[];
    }
  }


  namespace HotVideos {
    interface Request {
      movieId: number // 电影id
      offset: number // 页数
      limit: number // 每页数量
    }

    interface HotVideoItem {
      approve:  number;
      id:       number;
      videoUrl: string;
    }

    interface Image {
      authorId: number;
      height:   number;
      id:       number;
      sizeType: string;
      targetId: number;
      url:      string;
      width:    number;
    }

    interface Tag {
      content: string;
      url:     string;
    }

    interface VideoVideo {
      commentCount: number;
      id:           number;
      movieId:      number;
      playCount:    number;
      url:          string;
    }

    interface VideoElement {
      approve: number;
      id:      number;
      image:   Image;
      tag?:    Tag;
      video:   VideoVideo;
    }

  
    interface Data {
      hotVideos: HotVideoItem[];
      name:      string;
      schema:    string;
      total:     number;
      videos:    VideoElement[];
    }
  }

  namespace Activity {
    interface Request {

    }
    
    interface Data {
      hasActivity:  boolean;
      hasBonus:     boolean;
      activityInfo: null;
      bonusInfo:    null;
    }
  }


  namespace Realtime {
    interface Request {
      movieId: number; //影片id
    }

    interface Data {
      wish:    number; // 想看
      watched: number; // 看过
      snum:    number; // 评分数量
    }
  }


  namespace WishRecords {
    interface Request {

    }

    interface WishRecordItem {
      avatars:   string[];
      markTime:  string;
      timeCount: number;
      timeUnit:  number;
    }

    interface Data {

    }
  }



  namespace HotTopic {
    interface Request {
      movieId: number
    }

    interface ActionList {
      commentCount: number;
      guideText:    string;
      iconUrl:      string;
      jumpUrl:      string;
      newIconUrl:   string;
      tag:          number;
      title:        string;
      topicId:      number;
      type:         number;
  }

    interface Data {
      actionList: ActionList[];
    }
  }










}