namespace FilmBase {
  /** 枚举信息 */
  namespace FilmeEnum {
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
    color:       FilmeEnum.Color; //
    content:     FilmeEnum.Content; //
    onlyPreShow: boolean; //
  }

  interface RecommendAd {
    adId:       number; //
    frame:      number; //
    materialId: number; //
    movieId:    number; //
    positionId: number; //
  }

  interface Distribution {
    movieScoreLevel: string;
    proportion:      string;
  }

  interface ShortComment {
    content:  string;
    location: number;
  }

  interface FilmBaseItem {
    bingeWatch:       number;
    cat:              string;
    dir:              string;
    dur:              number;
    globalReleased:   boolean;
    id:               number;
    img:              string;
    movieExtraVO?:    MovieExtraVO;
    movieType:        number;
    nm:               string;
    pn:               number;
    proScore:         number;
    proScoreNum:      number;
    pubDate:          number;
    pubDesc:          string;
    rt:               Date;
    sc:               number;
    scm:              string;
    scoreLabel:       FilmeEnum.ScoreLabel;
    showInfo:         string;
    showst:           number;
    snum:             number;
    star:             string;
    ver:              FilmeEnum.Ver;
    videoName?:       string;
    videourl?:        string;
    vnum:             number;
    vodPlay:          boolean;
    wish:             number;
    wishst:           number;
  }

  /** 电影对象 */
  interface FilmItem extends FilmBaseItem {
    boxInfo:          string;
    civilPubSt:       number;
    comingTitle:      string;
    desc:             string;
    effectShowNum:    number;
    followst:         number;
    haspromotionTag:  boolean;
    headLineShow:     boolean;
    isRevival:        boolean;
    late:             boolean;
    localPubSt:       number;
    mark:             boolean;
    mk:               number;
    preSale?:         number;
    preShow:          boolean;
    pubShowNum:       number;
    recentShowDate:   number;
    recentShowNum:    number;
    showCinemaNum:    number;
    showNum:          number;
    showStateButton?: ShowStateButton;
    showTimeInfo?:    string;
    totalShowNum?:    number;
    videoId:          number;
    fra?:             string;
    frt?:             string;
    ftime?:           string;
  }

  interface FilmDetail extends FilmBaseItem {
    availableEpisodes: number;
    awardUrl:          string;
    backgroundColor:   string;
    bingeWatchst:      number;
    comScorePersona:   boolean;
    commented:         boolean;
    distributions:     Distribution[];
    dra:               string;
    egg:               boolean;
    enm:               string;
    episodeDur:        number;
    episodes:          number;
    filmAlias:         string;
    guideToWish:       boolean;
    latestEpisode:     number;
    minPriceContent:   string;
    modcsSt:           boolean;
    multiPub:          boolean;
    musicNum:          number;
    onSale:            boolean;
    onlinePlay:        boolean;
    orderSt:           number;
    oriLang:           string;
    photos:            string[];
    preScorePersona:   boolean;
    shortComment:      ShortComment;
    src:               string;
    trailerStyle:      number;
    type:              number;
    typeDesc:          string;
    vd:                string;
    videoImg:          string;
    viewedSt:          number;
    vodFreeSt:         number;
    vodSt:             number;
    watched:           number;
  }

  type FilmsData = BaseInformation.FilmItem[];
}