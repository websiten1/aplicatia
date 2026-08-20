export type DayClass = "normal" | "feast" | "blue";

export type AnualMarker = "" | "†" | "†)" | "(†)";

export interface AnualDayCell {
  day: number;
  class: DayClass;
  marker: AnualMarker;
}

export interface AnualMonth {
  eyebrow: string;
  name: string;
  subLine: string;
  /** Number of blank leading cells before day 1, 0-6 (Luni-first week). */
  leadingBlanks: number;
  days: AnualDayCell[];
}

export interface LunarDay {
  number: number;
  weekday: string;
  title: string;
  isFeast: boolean;
}

export interface ZilnicInfoRow {
  label: string;
  icon: "wedding" | "memorial";
}
