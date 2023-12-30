import { ShowStateButton } from "./common";

/** */
export enum CheerfulTerror {
  ChinaTerror = "中恐",
  MicroTerror = "微恐",
  MoreTerror = "非恐",
}

/** */
export enum CheerfulType {
  RPG = "RPG",
  PuzzleEscape = "解谜逃脱",
  ImmersiveInterpretation = "沉浸演绎",
}

/** */
export interface RecordListBaseItem  {
  projectId:       number;
  posterUrl:       string;
  url:             string;
  score:           string;
}

/** */
export interface RecordListItem extends RecordListBaseItem {
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

/** */
export interface WeekPlayBase {
  title:      string;
  schemaUrl:  string;
  recordList: RecordListItem[];
}
