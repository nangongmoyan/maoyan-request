namespace  Deploy {
  namespace HomeTab {
    interface Request {

    }

    interface HomeTabItem {
      advertisementId:  number;
      channel?:         number;
      channelStyle:     number;
      hotAndComing?:    number;
      id:               number;
      isDefaultChannel: number;
      isSupportChannel: number;
      name:             string;
      online:           number;
      putIconType:      number;
      rank:             number;
      topicName:        string;
      type:             number;
      visible:          number;
      channelUrl?:      string;
      marketingId?:     string;
      pageType?:        string;
      putIconUpdate?:   string;
    }
    
    interface Data {

    }
  }


  namespace City {
    interface Request {

    }

    enum Rank {
      A = "A",
      B = "B",
      C = "C",
      D = "D",
      E = "E",
      F = "F",
      S = "S",
      Z = "Z",
    }

    interface Data {
      id:            number;
      nm:            string;
      py:            string;
      rank:          Rank;
      acronym:       string;
      chineseFullnm: string;
      position:      Location;
    }
  }
}