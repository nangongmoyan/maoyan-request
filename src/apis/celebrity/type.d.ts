namespace Celebrity {

  namespace Information {
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

  namespace Photos {
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

  namespace Performance {
    interface Request {

    }

    interface WorksPerformanceItem {
      mbox:           number;
      mboxValue?:     string;
      mboxValueUnit?: string;
      role:           number;
      roleDesc:       string;
      bottomDesc?:    string;
      url?:           string;
      workValue?:     string;
      workValueUnit?: string;
  }

    interface PerformanceItem {
      type:              number;
      worksPerformances: WorksPerformanceItem[];
    }
  
    interface Data {
 
    }
  }

  namespace Relationship {
    interface Request {

    }

    interface RelationItem {
      avatar:   string;
      id:       number;
      name:     string;
      relation: string;
    }

  
    interface Data {
      relations: RelationItem[];
    }
  }

  namespace Movies {
    interface Request {
      limit?: number
    }

    interface Data {
      movies:           MovieBase.MovieBaseItem[];
      paging:           Paging;
      showAvatarDetail: boolean;
    }
  }

  namespace RecentMovies {
    interface Request {

    }


   interface RecentMovieItem {
      avatar:          string;
      category:        string;
      comingTitleDesc: string;
      desc:            string;
      dir:             string;
      duty:            string;
      dutyType:        number;
      id:              number;
      mbox:            number;
      mboxValue:       string;
      mboxValueUnit:   string;
      movieStatus:     string;
      name:            string;
      pubDate:         number;
      pubDesc:         string;
      roleList:        number[];
      rt:              Date;
      showst:          number;
      star:            string;
      type:            number;
    }

    interface Data {

    }
  }

  namespace Quantity {
    interface Request {

    }

    interface Data {
      boxNum:        number;
      boxRank:       number;
      celebrityId:   number;
      discussNum:    number;
      role:          string;
      wbFollowerNum: number;
      worksNum:      number;
    }
  }
}