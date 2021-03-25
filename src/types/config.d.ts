export interface GlobConfig {
  name: string;
  title: string;
}

export interface UIConfig {
  label: string;
  value: string | number;
}

export interface EquipExceptionRecord {
  key: number;
  time: string;
  name: string;
  lampName: string;
  exceptionStatus: number;
  actionStatus: number;
}
