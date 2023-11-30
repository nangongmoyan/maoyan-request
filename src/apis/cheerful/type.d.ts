namespace Cheerful {

  namespace SecretRoom {
    interface Request extends Location {
  
    }

    interface ProjectItem {
      score:       string;
      terror:      CheerfulBase.CheerfulEnum.Terror;
      posterUrl:   string;
      name:        string;
      discount:    boolean;
      poiId:       number;
      type:        CheerfulBase.CheerfulEnum.Type;
      projectId:   number;
      featuresToC: string[];
      jumpUrl:     string;
    }


    interface Data {
      projects:  ProjectItem[];
      title:     string;
      schemaUrl: string;
    }
  }

  namespace WonderShow {
    interface Request extends Location {

    }

    interface Data {
      wonderfulShow: CheerfulBase.WeekPlayBase;
      weekPlay:      CheerfulBase.WeekPlayBase;
    }
  }

  namespace ScriptKill {
    interface Request extends Location {

    }

    interface RecordListItem extends RecordListBaseItem {
      shortName: string;
    }

    interface Data {
      title:      string;
      schemaUrl:  string;
      recordList: RecordListItem[];
      chiefBonus: {
        chiefAvatarUrl: string; //首席头像
        chiefName:      string; // 首席名称
      };
    }
  }
}