namespace CheerfulBase {
  /** 枚举信息 */
  namespace CheerfulEnum {
    enum Terror {
      ChinaTerror = "中恐",
      MicroTerror = "微恐",
      MoreTerror = "非恐",
    }

    enum Type {
      RPG = "RPG",
      PuzzleEscape = "解谜逃脱",
      ImmersiveInterpretation = "沉浸演绎",
    }
  }

  interface ShowStateButton {
    color:       string;
    content:     string;
    onlyPreShow: boolean;
  }

  interface RecordListBaseItem  {
    projectId:       number;
    posterUrl:       string;
    url:             string;
    score:           string;
  }

  interface RecordListItem extends RecordListBaseItem {
    projectName:     string;
    startTime:       number;
    endTime:         number;
    onSaleTime:      number | null;
    tagType:         number;
    tagIcon:         null | string;
    tagText:         null | string;
    discount:        null | string;
    register:        boolean;
    ticketStatus:    number;
    _ov:             number;
    relativeTime:    string | null;
    showStateButton: ShowStateButton;
  }


  interface WeekPlayBase {
    title:      string;
    schemaUrl:  string;
    recordList: RecordListItem[];
  }


}