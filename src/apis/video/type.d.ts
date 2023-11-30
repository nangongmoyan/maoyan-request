namespace Video {
  namespace OnlineMovies {
    interface Request {

    }

    interface IconVO {
      iconValue: number;
      iconText:  string;
    }

  
    interface OnlineMovieListItem {
      movieId:       number;
      img:           string;
      score:         number;
      scoreLabel:    string;
      time:          number;
      title:         string;
      desc?:         string;
      preSellStatus: number;
      viewCount:     number;
      dealChannel:   VideoBase.VideoEnum.DealChannel;
      url:           string;
      iconVO?:       IconVO;
    }

    interface Data {
      title:           string;
      onlineMovieList: OnlineMovieListItem[];
      total:           number;
      isButtonStyle:   boolean;
      isIosShow:       number;
      isAndroidShow:   number;
      schemaUrl:       string;
    }
  }
}