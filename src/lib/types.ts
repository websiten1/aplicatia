export type FastingStatus = "fast-free" | "strict-fast" | "fast" | "fast-fish" | "fast-wine-oil";

export interface LiturgicalDay {
  id: string;
  civilDate: string; // ISO yyyy-mm-dd
  oldCalendarDate: string;
  tone: number;
  saints: string[]; // Saint ids
  feasts: string[]; // feast titles
  isMajorFeast: boolean;
  fastingStatus: FastingStatus;
  epistle: string; // Reading id
  gospel: string; // Reading id
  troparia: string[];
  kontakia: string[];
  iconAsset?: string;
  sourceVersion: string;
}

export interface Saint {
  id: string;
  nameRo: string;
  nameEn: string;
  feastDate: string;
  shortDescription: string;
  fullLife: string;
  iconImage?: string;
  troparion: string;
  kontakion: string;
  readings: string[];
  tags: string[];
}

export interface Reading {
  id: string;
  book: string;
  chapterStart: number;
  verseStart: number;
  chapterEnd: number;
  verseEnd: number;
  title: string;
  reference: string;
  textRo?: string;
  textEn: ReadingVerse[];
  audioUrl?: string;
  duration: string;
  narrator: string;
  sourceAttribution: string;
}

export interface ReadingVerse {
  verse: number;
  text: string;
}

export type PrayerCategory =
  | "morning"
  | "evening"
  | "before-meals"
  | "after-meals"
  | "prayer-rule"
  | "akathist"
  | "paraklesis"
  | "comforting";

export interface Prayer {
  id: string;
  category: PrayerCategory;
  title: string;
  text: string[];
  audioUrl?: string;
  estimatedMinutes: number;
  sourceAttribution: string;
}

export interface FastPeriod {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  permittedFoods: string;
  liturgicalContext: string;
}

export interface ClergyMember {
  name: string;
  role: string;
}

export interface ServiceTime {
  label: string;
  time: string;
}

export interface Parish {
  id: string;
  name: string;
  jurisdiction: string;
  address: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  distanceMi?: number;
  phone: string;
  email: string;
  website: string;
  clergy: ClergyMember[];
  serviceSchedule: ServiceTime[];
  imageUrl?: string;
  verifiedAt: string;
}

export type EventStatus = "upcoming" | "past";

export interface EventItem {
  id: string;
  title: string;
  description: string;
  startDateTime: string;
  endDateTime: string;
  allDay: boolean;
  timezone: string;
  parishName: string;
  location: string;
  latitude?: number;
  longitude?: number;
  registrationUrl?: string;
  imageUrl?: string;
  status: EventStatus;
  pastGallery?: string[];
}

export type ResourceCategoryId = "church-fathers" | "articles" | "videos" | "books" | "audio-library";

export interface ResourceItem {
  id: string;
  category: ResourceCategoryId;
  title: string;
  subtitle: string;
  durationOrLength?: string;
}

export interface Bookmark {
  id: string;
  entityType: "saint" | "reading" | "prayer" | "event" | "parish" | "article";
  entityId: string;
  title: string;
  subtitle?: string;
  createdAt: string;
}

export interface NoteEntry {
  id: string;
  entityType: "reading" | "prayer" | "saint";
  entityId: string;
  anchor: string;
  body: string;
  createdAt: string;
  updatedAt: string;
}
