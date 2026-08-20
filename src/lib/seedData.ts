import type { AnualDayCell, AnualMonth, LunarDay } from "./types";

export const WEEKDAY_LETTERS = ["L", "M", "M", "J", "V", "S", "D"];

export const ZILNIC_DAY_STRIP = [17, 18, 19, 20, 21, 22, 23];
export const ZILNIC_SELECTED_DAY = 20;

export const ZILNIC_HEADER_DATE = "Joi, 20 aug. '26";

export const ZILNIC_DAY_TITLE =
  "Sf. Proroc Samuel; Sf. Mc. Sever, Eliodor și Teoharie";

export const ZILNIC_SYNAXARION =
  "Samuel, prorocul Domnului, cel iubit de Domnul, a ridicat împărăția și a uns pe Saul și pe David peste poporul Lui. Cu legea Domnului a judecat adunarea și a cercetat Domnul pe Iacov prin rugăciunile lui. Și a fost cunoscut întru credința sa că este proroc credincios.";

export const MONTH_STRIP = [
  "MAI",
  "IUN",
  "IUL",
  "AUG",
  "SEP",
  "OCT",
];
export const MONTH_STRIP_ACTIVE = "AUG";

export const LUNAR_DAYS: LunarDay[] = [
  {
    number: 1,
    weekday: "SAM",
    title: "Scoaterea Sfintei Cruci; Sf. 7 frați Mucenici Macabei",
    isFeast: false,
  },
  {
    number: 2,
    weekday: "DUM",
    title:
      "Aducerea moaştelor Sf. întâi Mc. şi Arhidiacon Ştefan; Dreptul Gamaliel; Binecredinciosul Împărat Iustinian cel Mare; Duminica a 9-a după Rusalii; Ap. 1 Corinteni 3, 9-17; Ev. Matei 14, 22-34 (Potolirea furtunii); glas 8, voscr. 9",
    isFeast: true,
  },
  {
    number: 3,
    weekday: "LUN",
    title: "Sf. Cuv. Isaachie, Dalmat și Faust",
    isFeast: false,
  },
  {
    number: 4,
    weekday: "MAR",
    title: "Sf. 7 tineri din Efes",
    isFeast: false,
  },
  {
    number: 5,
    weekday: "MIE",
    title: "Înainte-prăznuirea Schimbării la Față",
    isFeast: false,
  },
  {
    number: 6,
    weekday: "JOI",
    title: "Schimbarea la Față a Domnului",
    isFeast: true,
  },
  {
    number: 7,
    weekday: "VIN",
    title: "Sf. Cuv. Mc. Domnica",
    isFeast: false,
  },
  {
    number: 8,
    weekday: "SAM",
    title: "Sf. Ierarh Emilian Mărturisitorul",
    isFeast: false,
  },
  {
    number: 9,
    weekday: "DUM",
    title: "Sf. Ap. Matia; Duminica a 10-a după Rusalii",
    isFeast: true,
  },
];

const jan2026Days: AnualDayCell[] = [
  { day: 1, class: "feast", marker: "†" },
  { day: 2, class: "normal", marker: "" },
  { day: 3, class: "normal", marker: "" },
  { day: 4, class: "feast", marker: "" },
  { day: 5, class: "normal", marker: "" },
  { day: 6, class: "feast", marker: "(†)" },
  { day: 7, class: "feast", marker: "†" },
  { day: 8, class: "normal", marker: "" },
  { day: 9, class: "normal", marker: "" },
  { day: 10, class: "blue", marker: "†)" },
  { day: 11, class: "feast", marker: "†" },
  { day: 12, class: "normal", marker: "" },
  { day: 13, class: "blue", marker: "†" },
  { day: 14, class: "normal", marker: "" },
  { day: 15, class: "normal", marker: "" },
  { day: 16, class: "normal", marker: "" },
  { day: 17, class: "normal", marker: "†)" },
  { day: 18, class: "feast", marker: "†" },
  { day: 19, class: "normal", marker: "" },
  { day: 20, class: "normal", marker: "†)" },
  { day: 21, class: "normal", marker: "" },
  { day: 22, class: "normal", marker: "" },
  { day: 23, class: "normal", marker: "" },
  { day: 24, class: "normal", marker: "" },
  { day: 25, class: "feast", marker: "†)" },
  { day: 26, class: "blue", marker: "†)" },
  { day: 27, class: "normal", marker: "†" },
  { day: 28, class: "normal", marker: "" },
  { day: 29, class: "normal", marker: "" },
  { day: 30, class: "feast", marker: "†)" },
  { day: 31, class: "normal", marker: "" },
];

export const ANUAL_MONTHS: AnualMonth[] = [
  {
    eyebrow: "GERAR",
    name: "Ianuarie",
    subLine: "(31 de zile; ziua are 9 ore, noaptea 15 ore)",
    leadingBlanks: 3,
    days: jan2026Days,
  },
];

export const ANUAL_YEARS = ["2025", "2026"];
export const ANUAL_ACTIVE_YEAR = "2026";

export const ANUAL_DEDICATION =
  "ANUL OMAGIAL AL PASTORAȚIEI FAMILIEI CREȘTINE ȘI ANUL COMEMORATIV AL SFINTELOR FEMEI DIN CALENDAR (MIRONOSIȚE, MUCENIȚE, MONAHII, SOȚII ȘI MAME) ÎN PATRIARHIA ROMÂNĂ.";

export const MENIU_LINKS = [
  "Termeni și condiții",
  "Politică de confidențialitate",
  "Contact / Suport",
];
