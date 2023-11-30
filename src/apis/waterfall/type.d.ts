namespace Waterfall {
  namespace FeedChannel{
    interface Request {
      feedChannelId: number // 进料通道id
      offset: number //
      limit: number //
    }

    interface Config {
      advertisementId:  number;
      channel:          number;
      channelStyle:     number;
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
    }


    interface Ad {
      adId:       number;
      frame:      number;
      labelShow:  boolean;
      link:       string;
      materialId: number;
      positionId: number;
    }

    interface EXTInfo {
      owImgHeight: number;
      owTitle:     string;
      owImgWidth:  number;
      owImgUrl:    string;
    }


    interface ObjectItem {
      img:   string;
      label: Label;
      nm:    string;
    }

    interface MediaBoard {
      content: string;
      id:      number;
      name:    string;
      objects: ObjectItem[];
    }

    interface Label {
      number: string;
      text:   string;
    }

    interface FeedItem extends MovieBase.FeedBaseItem {
      ad?:            Ad;
      dataSource:     number;
      eventTracking:  string;
      extInfo?:       EXTInfo;
      reqTraceId:     ReqTraceID;
      user?:          UserBase.UserItem;
      addTime?:       number;
      shareCount?:    number;
      mediaBoard?:    MediaBoard;
    }

    interface Data {
      config:    Config;
      feeds:     FeedItem[];
      paging:    Paging;
      timestamp: number;
    }
  }
}