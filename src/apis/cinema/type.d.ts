namespace Cinema {
  namespace FilterCinemas {
    interface Request {

    }

    interface SubItem {
      count:    number;
      id:       number;
      name:     string;
      subItems: SubItem[];
    }

  
    interface FilterCinema {
      name:     string;
      subItems: SubItem[];
    }

    interface Data {
      brand:      FilterCinema;
      district:   FilterCinema;
      hallType:   FilterCinema;
      service:    FilterCinema;
      showType:   null;
      subway:     FilterCinema;
      timeRanges: FilterCinema;
    }
  }

  namespace MoreCinemas {
    interface Request extends Location {
      offset: number
      limit: number
      movieId?: number
      day?: string
    }

    interface CTPois {
      ct_poi: string;
      poiid:  number;
    }

    interface Data {
      cinemas: CinemaBase.CinemaBaseItem[];
      ct_pois: CTPois[];
      paging:  Paging;
    }
  }

  namespace Show {
    interface Request {
      cinemaId: number // 影院id
    }

    interface VipInfo {
      isCardSales: number;
      process:     string;
      tag:         Tag;
      title:       string;
      url:         string;
    }

    interface StoneData {
      base64:             {};
      resultCode:         number;
      resultMessage:      string;
      cssSource:          string;
      unicodeMap:         null;
      __isset_bit_vector: number[];
      optionals:          string[];
    }

    interface Data {
      cinemaId:            number;
      cinemaName:          string;
      cityCardInfo:        any[];
      modeSwitchThreshold: number;
      movies:              MovieBase.CinemaMovieBaseItem[];
      poiId:               number;
      selectedMovieSeq:    number;
      sell:                boolean;
      stringPoiId:         string;
      tips:                string;
      vipInfo:             VipInfo[];
      stoneData:           StoneData;
    }
  }

  namespace Detail {
    interface Request {
      cinemaId: number // 影院id
    }

    interface FeatureTag {
      color: string;
      desc:  string;
      icon:  string;
      tag:   string;
      type:  number;
      url:   string;
    }

    interface LicenseList {
      img:   string;
      title: string;
    }

    interface CinemaLicenseInfo {
      desc:        string;
      licenseList: LicenseList[];
      title:       string;
    }

    interface Info {
      desc:        string;
      hasProm?:    number;
      icon:        string;
      superScript: string;
      title:       string;
      url:         string;
      type?:       number;
    }

    interface CallboardInfo {
      desc: string;
      url:  string;
    }

    interface Data {
    addr:                 string;
    buyoutInfo:           null;
    callboardInfo:        CallboardInfo;
    cinemaCouponPackInfo: Info;
    cinemaId:             number;
    cinemaLicenseInfo:    CinemaLicenseInfo;
    couponInfo:           null;
    endorseInfo:          null;
    fansMeetingInfo:      null;
    featureTags:          FeatureTag[];
    follow:               number;
    headImg:              string;
    lat:                  number;
    lng:                  number;
    mallInfo:             null;
    nm:                   string;
    notice:               string;
    poiId:                number;
    refundInfo:           null;
    roadLeading:          string;
    s:                    number;
    s1:                   number;
    s2:                   number;
    s3:                   number;
    saleInfo:             null;
    sell:                 boolean;
    shopId:               number;
    shopUuid:             string;
    snum:                 number;
    stringPoiId:          string;
    stringShopId:         string;
    tel:                  string;
    vipInfo:              Info;
    }
  }
}