namespace Attraction {
  namespace Sights {
    interface Request {
      lng: number // 经度
      lat: number // 纬度
    }
    
    interface SightItem {
      posterUrl: string;
      poiName:   string;
      discount:  boolean;
      poiId:     number;
      category:  string;
      jumpUrl:   string;
    }

    interface Data {
      sights:    SightItem[];
      title:     string;
      schemaUrl: string;
    }
  }
}