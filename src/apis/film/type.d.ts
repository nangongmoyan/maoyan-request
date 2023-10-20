/** 电影 */
namespace Film {
  /** 枚举信息 */
  namespace EnumInformation {
    /** 评分标签枚举 */
    enum ScoreLabel {
      NoRate = "暂无评分",
      MaoYanRate = "猫眼购票评分"
    }

    /** */
    enum Color {
      F03D37 = "#F03D37",
      The3C9Fe6 = "#3C9FE6",
    }

    /** */
    enum Content {
      BuyTickets = "购票",
      PrevSale = "预售",
    }

    /** */
    export enum Ver {
      Empty = "",
      The2D = "2D",
    }
  }
  
  /** 电影基本信息 */
  namespace BaseInformation {
    /** */
    interface Paging {
      hasMore: boolean;
      limit:   number;
      offset:  number;
      total:   number;
    }

    /** 首席奖金 */
    interface ChiefBonus {
      chiefAvatarUrl: string; //首席头像
      chiefName:      string; // 首席名称
    }

    /** */
    interface Stid {
      movieId: number; //
      stid:    string; //
    }

    /** */
    interface SubImageVO {
      autoCarousel: boolean; //
      images: {
        id:  number; //
        url: string; //
      }[]; //
    }

    /** */
    interface MovieExtraVO {
      subImageVO: SubImageVO; //
      wishAnimation?: {
        url: string; //
      };
    }

    /** */
    interface ShowStateButton {
      color:       EnumInformation.Color; //
      content:     EnumInformation.Content; //
      onlyPreShow: boolean; //
    }

    interface RecommendAd {
      adId:       number; //
      frame:      number; //
      materialId: number; //
      movieId:    number; //
      positionId: number; //
    }

    /** 电影对象 */
    interface FilmItem {
      bingeWatch:       number;
      boxInfo:          string;
      cat:              string;
      civilPubSt:       number;
      comingTitle:      string;
      desc:             string;
      dir:              string;
      dur:              number;
      effectShowNum:    number;
      followst:         number;
      globalReleased:   boolean;
      haspromotionTag:  boolean;
      headLineShow:     boolean;
      id:               number;
      img:              string;
      isRevival:        boolean;
      late:             boolean;
      localPubSt:       number;
      mark:             boolean;
      mk:               number;
      movieExtraVO?:    MovieExtraVO;
      movieType:        number;
      nm:               string;
      pn:               number;
      preSale?:         number;
      preShow:          boolean;
      proScore:         number;
      proScoreNum:      number;
      pubDate:          number;
      pubDesc:          string;
      pubShowNum:       number;
      recentShowDate:   number;
      recentShowNum:    number;
      rt:               Date;
      sc:               number;
      scm:              string;
      scoreLabel:       EnumInformation.ScoreLabel;
      showCinemaNum:    number;
      showInfo:         string;
      showNum:          number;
      showStateButton?: ShowStateButton;
      showTimeInfo?:    string;
      showst:           number;
      snum:             number;
      star:             string;
      totalShowNum?:    number;
      ver:              EnumInformation.Ver;
      videoId:          number;
      videoName?:       string;
      videourl?:        string;
      vnum:             number;
      vodPlay:          boolean;
      wish:             number;
      wishst:           number;
      fra?:             string;
      frt?:             string;
      ftime?:           string;
    }

    /** 响应类型1 */
    interface FilmResponeseOne {
      chiefBonus:     { [key: string]: ChiefBonus[] }; //
      coming:         FilmItem[]; //
      hot:            FilmItem[]; //
      movieIds:       number[]; //
      paging?:        Paging;
      recommendAds?:  RecommendAd[];
      schemaUrl:      string; //
      showLimit:      number; //
      stid:           string; //
      stids:          Stid[]; //
      total:          number; //
    }

    type FilmsData = BaseInformation.FilmItem[];
  }

  /** 正在热映 */
  namespace Hot {
    interface Request extends MaoYanService.BaseInformation.Request {
      utm_medium?:  string; //
      open?:        string; //
      homepage?:    string; // 
      extra?:       boolean; //
    }
  }

  /** 即将上映 */
  namespace ComingSoon {
    interface Request extends MaoYanService.BaseInformation.Request {
      uuid?:  string ; //
      extra?: boolean; //
    }
  }

  /** 待映推荐 */
  namespace ToBeScreened {
    interface Request extends MaoYanService.BaseInformation.Request {
      uuid?:      string ; //
      extra?:     boolean; //
      homepage?:  string; // 
    }
  }
}