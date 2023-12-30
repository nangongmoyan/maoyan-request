import { CheerfulTerror, CheerfulType, MaoYanLocation, RecordListBaseItem, WeekPlayBase } from "../../types";

/* ------------------- 密室逃脱 ------------------ */
export interface SecretRoomProjectItem {
  score:       string;
  terror:      CheerfulTerror;
  posterUrl:   string;
  name:        string;
  discount:    boolean;
  poiId:       number;
  type:        CheerfulType;
  projectId:   number;
  featuresToC: string[];
  jumpUrl:     string;
}

export interface SecretRoomRequest extends MaoYanLocation {}

export interface SecretRoomData {
  projects:  SecretRoomProjectItem[];
  title:     string;
  schemaUrl: string;
}

/* ------------------- 密室逃脱 ------------------ */
export interface WonderShowRequest extends MaoYanLocation {}

export interface WonderShowData {
  wonderfulShow: WeekPlayBase;
  weekPlay:      WeekPlayBase;
}

/* ------------------- 沉浸剧场 ------------------ */
export interface RecordListItem extends RecordListBaseItem {
  shortName: string;
}

export interface ScriptKillRequest extends MaoYanLocation {}

export interface ScriptKillData {
  title:      string;
  schemaUrl:  string;
  recordList: RecordListItem[];
  chiefBonus: {
    chiefAvatarUrl: string; //首席头像
    /**首席名称 */
    chiefName:      string; 
  };
}