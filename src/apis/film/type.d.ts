/** 电影 */
namespace MaoYanFilm {
  /** 响应类型1 */
  interface FilmResponeseOne {
    chiefBonus:     { [key: string]: FilmBase.ChiefBonus[] }; //
    coming:         FilmBase.FilmItem[]; //
    hot:            FilmBase.FilmItem[]; //
    movieIds:       number[]; //
    paging?:        FilmBase.Paging;
    recommendAds?:  FilmBase.RecommendAd[];
    schemaUrl:      string; //
    showLimit:      number; //
    stid:           string; //
    stids:          FilmBase.Stid[]; //
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
      movie: FilmBase.FilmDetail
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

  namespace FilmPhotos {
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

  namespace CelebrityInfo {
    interface Request {

    }

    interface Data {
      aliasName:            string;
      attachUserId:         number;
      auth:                 number;
      avatar:               string;
      backgroundColor:      string;
      bgImg:                string;
      bgImgBackgroundColor: string;
      birthday:             Date;
      birthplace:           string;
      bloodType:            string;
      boardUrl:             string;
      cnm:                  string;
      company:              string;
      constellation:        string;
      deathDate:            string;
      desc:                 string;
      enm:                  string;
      fansName:             string;
      feedbackUrl:          string;
      followCount:          number;
      followRank:           number;
      followState:          number;
      graduateSchool:       string;
      height:               number;
      id:                   number;
      nation:               string;
      nationality:          string;
      photoNum:             number;
      photos:               string[];
      present:              number;
      presentImg:           string;
      proIntroUrl:          string;
      publicTitles:         any[];
      rank:                 number;
      receiveWord:          string;
      sendWord:             string;
      sexy:                 string;
      signImg:              string;
      still:                string;
      sumBox:               number;
      titleList:            string[];
      titles:               string;
      userDailyPresent:     number;
    }
  }

  namespace CelebrityPhotos {
    interface Request {

    }

    interface Photo {
      approve: number;
      id:      number;
      olink:   string;
      tlink:   string;
      type:    number;
  }
  
    interface Data {
      proJumpUrl: string;
      size:       number;
      photos:     Photo[];
    }
  }
}