namespace Carousel {

  namespace Detail {
    interface Request {
      positionIds: string
      clientType: 'wechat_small_program'
    }

    interface Config {
      adId:         number;
      adImgColor:   string;
      frame:        number;
      image:        string;
      link:         string;
      materialId:   number;
      materialType: number;
      showAdLabel:  number;
      type:         number;
    }

    interface DetailItem {
      config:       Config[];
      positionId:   number;
      positionName: string;
      type:         number;
    }

    interface Data {

    }
  }
}