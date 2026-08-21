import type {
  ClergyMember,
  EventItem,
  FastPeriod,
  LiturgicalDay,
  NoteEntry,
  Parish,
  Prayer,
  PrayerCategory,
  Reading,
  ResourceItem,
  Saint,
} from "./types";

export const WEEKDAY_SHORT = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
export const WEEKDAY_INITIAL = ["S", "M", "T", "W", "T", "F", "S"];

/** The app's fixed reference "today" — matches the build spec's reference screens exactly. */
export const REFERENCE_DATE = "2025-05-15";

export function oldCalendarDate(civilDate: string): string {
  const d = new Date(civilDate + "T00:00:00");
  d.setDate(d.getDate() - 13);
  return d.toISOString().slice(0, 10);
}

export function weekdayOf(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return WEEKDAY_SHORT[d.getDay()];
}

export function formatLongDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}

export function formatMediumDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

/* ---------------------------------- Saints -------------------------------- */

export const SAINTS: Saint[] = [
  {
    id: "prophet-samuel",
    nameRo: "Sf. Proroc Samuel",
    nameEn: "Holy Prophet Samuel",
    feastDate: "2025-05-15",
    shortDescription: "Last of the Judges of Israel and the prophet who anointed Saul and David as kings.",
    fullLife:
      "The Holy Prophet Samuel was the last of the Judges of Israel and the first of the great line of prophets after Moses. Born through the fervent prayer of his mother Hannah, he was dedicated to the service of God from infancy at the Tabernacle of Shiloh under the high priest Eli. Samuel judged Israel with righteousness, anointed Saul as the first king, and, after Saul's disobedience, anointed the young shepherd David as king in his place. He is remembered by the Church for his faithfulness in prayer and his unwavering devotion to the Law of the Lord.",
    troparion:
      "Rejoicing in the Lord as one who followed His statutes, thou didst grow, O righteous one, being counted worthy of the gift of prophecy. Wherefore we honor thee, O divinely wise Samuel.",
    kontakion:
      "Thou wast shown to be a divine vessel of prophecy, having been consecrated to the Lord even from the womb, O Samuel, glory of the prophets.",
    readings: ["reading-acts-6", "reading-john-4"],
    tags: ["prophet", "old-testament"],
  },
  {
    id: "sever-eliodor-teoharie",
    nameRo: "Sf. Mc. Sever, Eliodor și Teoharie",
    nameEn: "Holy Martyrs Sever, Heliodorus and Theoharis",
    feastDate: "2025-05-15",
    shortDescription: "Martyrs commemorated together with the Prophet Samuel on May 15.",
    fullLife:
      "The Holy Martyrs Sever, Heliodorus and Theoharis contended for the Christian faith and were glorified by God through their steadfast confession even unto death. Their memory is kept together with the Holy Prophet Samuel in the calendar of the Church.",
    troparion: "Thy holy martyrs, O Lord, through their sufferings have received incorruptible crowns from Thee, our God.",
    kontakion: "Having fought the good fight together, O Martyrs, ye received the crown of incorruption from the Master of all.",
    readings: [],
    tags: ["martyr"],
  },
  {
    id: "jeremiah",
    nameRo: "Sf. Proroc Ieremia",
    nameEn: "Holy Prophet Jeremiah",
    feastDate: "2025-05-01",
    shortDescription: "One of the four Major Prophets, author of the Book of Lamentations.",
    fullLife:
      "The Holy Prophet Jeremiah prophesied the destruction of Jerusalem and the Babylonian captivity, calling Israel to repentance amid great personal suffering and rejection by his own people. He is honored as one of the four Major Prophets of the Old Testament.",
    troparion: "We celebrate the memory of Thy prophet Jeremiah today, O Lord; through his intercessions save our souls.",
    kontakion: "Having been filled with divine grace, O Prophet, thou didst foretell the sufferings of the Just One.",
    readings: [],
    tags: ["prophet", "old-testament"],
  },
  {
    id: "athanasius-great",
    nameRo: "Sf. Atanasie cel Mare",
    nameEn: "St. Athanasius the Great",
    feastDate: "2025-05-02",
    shortDescription: "Archbishop of Alexandria and defender of Orthodoxy against Arianism.",
    fullLife:
      "St. Athanasius the Great, Archbishop of Alexandria, was the foremost defender of the Orthodox faith at the First Ecumenical Council against the Arian heresy, enduring repeated exile for the sake of the true confession of Christ's divinity.",
    troparion: "Pillar of Orthodoxy, supporting the Church with divine doctrines, O Hierarch Athanasius, thou didst confound Arius' error.",
    kontakion: "The Church, filled with thy divine doctrines, has been adorned as with an ornament of gold, O Wise Athanasius.",
    readings: [],
    tags: ["hierarch"],
  },
  {
    id: "holy-cross-third-finding",
    nameRo: "Sf. Cruce – A treia aflare",
    nameEn: "Holy Cross – Third Finding",
    feastDate: "2025-05-03",
    shortDescription: "Commemoration of the Precious Cross.",
    fullLife:
      "The Church commemorates the veneration of the Precious and Life-Giving Cross of the Lord, through which the world has received salvation and victory over death.",
    troparion: "Save, O Lord, Thy people, and bless Thine inheritance, granting victory over adversaries by virtue of Thy Cross.",
    kontakion: "As Thou wast voluntarily raised upon the Cross, O Christ God, bestow Thy mercies upon Thy new commonwealth.",
    readings: [],
    tags: ["feast"],
  },
  {
    id: "job-long-suffering",
    nameRo: "Sf. Drept Iov",
    nameEn: "Righteous Job the Long-suffering",
    feastDate: "2025-05-06",
    shortDescription: "The righteous sufferer of the Old Testament, a model of patience and faith.",
    fullLife:
      "The Righteous Job endured the loss of his family, wealth and health, yet never cursed God, becoming the great scriptural icon of patient faith amid suffering. His story is read in full during Holy Week.",
    troparion: "Having shown thyself righteous in all thy ways, thou wast tried like gold in the furnace of suffering, O Job.",
    kontakion: "My soul, having heard of the sufferings of Job, guard thyself from all boasting.",
    readings: [],
    tags: ["righteous", "old-testament"],
  },
  {
    id: "nicholas-translation",
    nameRo: "Sf. Nicolae – Aducerea moaștelor",
    nameEn: "Translation of the Relics of St. Nicholas of Myra",
    feastDate: "2025-05-09",
    shortDescription: "Commemoration of the transfer of the relics of St. Nicholas to Bari.",
    fullLife:
      "This feast commemorates the translation of the relics of St. Nicholas, Archbishop of Myra in Lycia, from Myra to Bari in 1087, an event celebrated with particular joy throughout the Orthodox world.",
    troparion: "In truth thou wast revealed to thy flock as a rule of faith, an image of humility and a teacher of abstinence, O Nicholas.",
    kontakion: "Thou didst appear in Myra, O saint, as a priest supreme; for having fulfilled the Gospel of Christ, O venerable one.",
    readings: [],
    tags: ["hierarch"],
  },
  {
    id: "samaritan-woman",
    nameRo: "Duminica Samarinencei",
    nameEn: "Sunday of the Samaritan Woman",
    feastDate: "2025-05-11",
    shortDescription: "Movable feast commemorating Christ's encounter with St. Photini at Jacob's Well.",
    fullLife:
      "On this Sunday the Church commemorates the Gospel account of Christ's conversation with the Samaritan woman, later known as St. Photini, at Jacob's Well, and her subsequent proclamation of the Messiah.",
    troparion: "Coming to the well in faith, the Samaritan woman beheld Thee, the Water of Wisdom, of which having drunk abundantly, she inherited the Kingdom on high.",
    kontakion: "Coming to the well with faith, the woman of Samaria beheld Thee, the Water of Wisdom.",
    readings: [],
    tags: ["movable-feast"],
  },
  {
    id: "constantine-helen",
    nameRo: "Sf. Constantin și Elena",
    nameEn: "Sts. Constantine and Helen, Equals-to-the-Apostles",
    feastDate: "2025-05-21",
    shortDescription: "The Emperor who ended persecution of Christians and his mother who found the True Cross.",
    fullLife:
      "St. Constantine the Great, first Christian Roman Emperor, ended the persecution of the Church through the Edict of Milan and convened the First Ecumenical Council. His mother, St. Helen, journeyed to Jerusalem and recovered the True Cross of Christ.",
    troparion: "Having seen the image of the Cross in the heavens, and having received the call from above like Paul, not from men, thy Apostle among rulers, O Lord, committed the ruling city into Thy hand.",
    kontakion: "Today Constantine and his mother Helen reveal the precious Cross.",
    readings: [],
    tags: ["equal-to-apostles"],
  },
  {
    id: "ascension",
    nameRo: "Înălțarea Domnului",
    nameEn: "Ascension of the Lord",
    feastDate: "2025-05-29",
    shortDescription: "The Great Feast commemorating Christ's ascension into heaven forty days after Pascha.",
    fullLife:
      "Forty days after His Resurrection, our Lord Jesus Christ ascended bodily into heaven from the Mount of Olives in the presence of His disciples, promising the descent of the Holy Spirit and His own return in glory.",
    troparion: "Thou hast ascended in glory, O Christ our God, granting joy to Thy disciples by the promise of the Holy Spirit.",
    kontakion: "When Thou didst fulfill the dispensation for our sake, and unite earth to heaven, Thou didst ascend in glory, O Christ our God.",
    readings: [],
    tags: ["great-feast", "major"],
  },
];

/* -------------------------------- Readings -------------------------------- */

export const READINGS: Reading[] = [
  {
    id: "reading-acts-6",
    book: "Acts of the Apostles",
    chapterStart: 6,
    verseStart: 8,
    chapterEnd: 7,
    verseEnd: 60,
    title: "Acts of the Apostles",
    reference: "Acts 6:8-15; 7:1-5, 47-60",
    audioUrl: "",
    duration: "06:35",
    narrator: "Fr. Michael Popescu",
    sourceAttribution: "King James Version (public domain)",
    textEn: [
      { verse: 8, text: "And Stephen, full of grace and power, did great wonders and signs among the people." },
      { verse: 9, text: "Then certain of the synagogue, which is called the synagogue of the Libertines, and Cyrenians, and Alexandrians, and of them of Cilicia and of Asia, disputing with Stephen." },
      { verse: 10, text: "And they were not able to resist the wisdom and the spirit by which he spake." },
      { verse: 11, text: "Then they suborned men, which said, We have heard him speak blasphemous words against Moses, and against God." },
      { verse: 12, text: "And they stirred up the people, and the elders, and the scribes, and came upon him, and caught him, and brought him to the council." },
      { verse: 47, text: "But Solomon built him an house." },
      { verse: 48, text: "Howbeit the most High dwelleth not in temples made with hands; as saith the prophet," },
      { verse: 59, text: "And they stoned Stephen, calling upon God, and saying, Lord Jesus, receive my spirit." },
      { verse: 60, text: "And he kneeled down, and cried with a loud voice, Lord, lay not this sin to their charge. And when he had said this, he fell asleep." },
    ],
  },
  {
    id: "reading-john-4",
    book: "Gospel of John",
    chapterStart: 4,
    verseStart: 46,
    chapterEnd: 4,
    verseEnd: 54,
    title: "Gospel of John",
    reference: "John 4:46-54",
    audioUrl: "",
    duration: "03:10",
    narrator: "Fr. Michael Popescu",
    sourceAttribution: "King James Version (public domain)",
    textEn: [
      { verse: 46, text: "So Jesus came again into Cana of Galilee, where he made the water wine. And there was a certain nobleman, whose son was sick at Capernaum." },
      { verse: 47, text: "When he heard that Jesus was come out of Judaea into Galilee, he went unto him, and besought him that he would come down, and heal his son: for he was at the point of death." },
      { verse: 48, text: "Then said Jesus unto him, Except ye see signs and wonders, ye will not believe." },
      { verse: 49, text: "The nobleman saith unto him, Sir, come down ere my child die." },
      { verse: 50, text: "Jesus saith unto him, Go thy way; thy son liveth. And the man believed the word that Jesus had spoken unto him, and he went his way." },
      { verse: 53, text: "So the father knew that it was at the same hour, in the which Jesus said unto him, Thy son liveth: and himself believed, and his whole house." },
      { verse: 54, text: "This is again the second miracle that Jesus did, when he was come out of Judaea into Galilee." },
    ],
  },
];

/* ------------------------------ Liturgical days ---------------------------- */

interface DaySeed {
  day: number;
  saints: string[];
  feasts: string[];
  isMajorFeast?: boolean;
}

const MAY_2025: DaySeed[] = [
  { day: 1, saints: ["jeremiah"], feasts: [] },
  { day: 2, saints: ["athanasius-great"], feasts: [] },
  { day: 3, saints: ["holy-cross-third-finding"], feasts: [] },
  { day: 4, saints: [], feasts: ["Holy Myrrhbearing Women"] },
  { day: 5, saints: [], feasts: ["Great Martyr Irene"] },
  { day: 6, saints: ["job-long-suffering"], feasts: [] },
  { day: 7, saints: [], feasts: ["Sign of the Precious Cross over Jerusalem"] },
  { day: 8, saints: [], feasts: ["Holy Apostle and Evangelist John the Theologian"] },
  { day: 9, saints: ["nicholas-translation"], feasts: [] },
  { day: 10, saints: [], feasts: ["Holy Apostle Simon the Zealot"] },
  { day: 11, saints: ["samaritan-woman"], feasts: ["Sts. Cyril and Methodius, Equals-to-the-Apostles"] },
  { day: 12, saints: [], feasts: ["St. Epiphanius of Cyprus"] },
  { day: 13, saints: [], feasts: ["Martyr Glykeria"] },
  { day: 14, saints: [], feasts: ["Martyr Isidore of Chios"] },
  { day: 15, saints: ["prophet-samuel", "sever-eliodor-teoharie"], feasts: [] },
  { day: 16, saints: [], feasts: ["St. Theodore the Sanctified"] },
  { day: 17, saints: [], feasts: ["Apostle Andronicus of the Seventy"] },
  { day: 18, saints: [], feasts: ["Sunday of the Blind Man"] },
  { day: 19, saints: [], feasts: ["Hieromartyr Patrick of Prusa"] },
  { day: 20, saints: [], feasts: ["Martyr Thallelaeus"] },
  { day: 21, saints: ["constantine-helen"], feasts: [] },
  { day: 22, saints: [], feasts: ["Martyr Basiliscus of Comana"] },
  { day: 23, saints: [], feasts: ["St. Michael the Confessor of Synnada"] },
  { day: 24, saints: [], feasts: ["Venerable Symeon of the Wondrous Mountain"] },
  { day: 25, saints: [], feasts: ["Third Finding of the Head of St. John the Baptist"] },
  { day: 26, saints: [], feasts: ["Apostle Carpus of the Seventy"] },
  { day: 27, saints: [], feasts: ["Hieromartyr Therapon of Cyprus"] },
  { day: 28, saints: [], feasts: ["Leave-taking of Pascha"] },
  { day: 29, saints: ["ascension"], feasts: ["Ascension of the Lord"], isMajorFeast: true },
  { day: 30, saints: [], feasts: ["Apodosis of the Ascension"] },
  { day: 31, saints: [], feasts: ["Martyr Hermias of Comana"] },
];

function toneForDay(day: number): number {
  // Weeks anchored so May 11–17 (containing the reference date) is Tone 3.
  if (day <= 3) return 1;
  if (day <= 10) return 2;
  if (day <= 17) return 3;
  if (day <= 24) return 4;
  return 5;
}

export const LITURGICAL_DAYS: LiturgicalDay[] = MAY_2025.map(({ day, saints, feasts, isMajorFeast }) => {
  const civilDate = `2025-05-${String(day).padStart(2, "0")}`;
  const isReferenceDay = day === 15;
  return {
    id: civilDate,
    civilDate,
    oldCalendarDate: oldCalendarDate(civilDate),
    tone: toneForDay(day),
    saints,
    feasts,
    isMajorFeast: Boolean(isMajorFeast) || (day === 11 || day === 18),
    fastingStatus: "fast-free",
    epistle: isReferenceDay ? "reading-acts-6" : "reading-acts-6",
    gospel: isReferenceDay ? "reading-john-4" : "reading-john-4",
    troparia: saints.map((id) => `troparion-${id}`),
    kontakia: saints.map((id) => `kontakion-${id}`),
    sourceVersion: "2025.1",
  };
});

export function getLiturgicalDay(civilDate: string): LiturgicalDay | undefined {
  return LITURGICAL_DAYS.find((d) => d.civilDate === civilDate);
}

export function dayTitle(day: LiturgicalDay): string {
  const saintNames = day.saints.map((id) => SAINTS.find((s) => s.id === id)?.nameRo).filter(Boolean);
  if (saintNames.length > 0) return saintNames.join("; ");
  if (day.feasts.length > 0) return day.feasts[0];
  return "Daily commemorations";
}

/* --------------------------------- Prayers --------------------------------- */

export const PRAYER_CATEGORY_LABEL: Record<PrayerCategory, string> = {
  morning: "Morning Prayers",
  evening: "Evening Prayers",
  "before-meals": "Before Meals",
  "after-meals": "After Meals",
  "prayer-rule": "Prayer Rule",
  akathist: "Akathist Hymns",
  paraklesis: "Paraklesis Service",
  comforting: "Comforting Prayers",
};

export const PRAYERS: Prayer[] = [
  {
    id: "prayer-morning",
    category: "morning",
    title: "Morning Prayers",
    estimatedMinutes: 8,
    sourceAttribution: "Traditional Orthodox Prayer Book",
    text: [
      "O Heavenly King, Comforter, Spirit of Truth, Who art everywhere present and fillest all things, Treasury of blessings and Giver of life: come and abide in us, cleanse us from every stain, and save our souls, O Good One.",
      "Glory to God for all things. Having risen from sleep, I thank Thee, O Holy Trinity, for through Thy great goodness and patience Thou wast not angered with me, an idler and sinner.",
      "O Lord, grant that I may greet the coming day in peace, that in all things I may rely upon Thy holy will. In every hour of this day, direct and support me in all things.",
    ],
  },
  {
    id: "prayer-evening",
    category: "evening",
    title: "Evening Prayers",
    estimatedMinutes: 10,
    sourceAttribution: "Traditional Orthodox Prayer Book",
    text: [
      "O Lord our God, if I have sinned in anything this day, in word, deed or thought, forgive me, for Thou art good and lovest mankind.",
      "Into Thy hands, O Lord Jesus Christ my God, I commend my spirit. Bless me, save me, and grant me eternal life.",
      "Vouchsafe, O Lord, to keep us this night without sin. Blessed art Thou, O Lord, God of our Fathers, and praised and glorified is Thy name unto the ages.",
    ],
  },
  {
    id: "prayer-before-meals",
    category: "before-meals",
    title: "Before Meals",
    estimatedMinutes: 1,
    sourceAttribution: "Traditional Orthodox Prayer Book",
    text: [
      "The eyes of all wait upon Thee, O Lord, and Thou givest them their meat in due season. Thou openest Thine hand and satisfiest the desire of every living thing.",
      "Christ our God, bless the food and drink of Thy servants, for Thou art holy always, now and ever, and unto the ages of ages. Amen.",
    ],
  },
  {
    id: "prayer-after-meals",
    category: "after-meals",
    title: "After Meals",
    estimatedMinutes: 1,
    sourceAttribution: "Traditional Orthodox Prayer Book",
    text: [
      "We thank Thee, O Christ our God, that Thou hast satisfied us with Thy earthly gifts; deprive us not of Thy heavenly Kingdom.",
      "Blessed is God who hath mercy on us and nourisheth us from His bountiful gifts by His grace and compassion, always, now and ever, and unto the ages of ages. Amen.",
    ],
  },
  {
    id: "prayer-rule",
    category: "prayer-rule",
    title: "Prayer Rule",
    estimatedMinutes: 15,
    sourceAttribution: "Traditional Orthodox Prayer Book",
    text: [
      "A simple daily prayer rule may consist of the Trisagion Prayers, the Creed, a fixed number of Jesus Prayers, intercessions for the living and departed, and the Lord's Prayer.",
      "Begin and end each rule calmly, without haste, standing if possible before an icon, allowing the mind to descend into the heart.",
    ],
  },
  {
    id: "prayer-akathist",
    category: "akathist",
    title: "Akathist Hymns",
    estimatedMinutes: 45,
    sourceAttribution: "Traditional Orthodox Service Book",
    text: [
      "The Akathist Hymn 'Chosen Champion Leader' is chanted in praise of the Theotokos in 24 stanzas of alternating Kontakia and Oikoi, standing throughout as an act of vigilance and joy.",
      "Rejoice, thou through whom joy shall shine forth; rejoice, thou through whom the curse shall cease.",
    ],
  },
  {
    id: "prayer-paraklesis",
    category: "paraklesis",
    title: "Paraklesis Service",
    estimatedMinutes: 25,
    sourceAttribution: "Traditional Orthodox Service Book",
    text: [
      "The Small Paraklesis is a service of supplication to the Most Holy Theotokos, especially beloved during the Dormition Fast, entreating her swift intercession in every affliction and need.",
      "Many afflictions rise up against me, and, seeking help, O Virgin, I flee unto thee; O Mother of the Word and Virgin, deliver me from distress.",
    ],
  },
  {
    id: "prayer-comforting",
    category: "comforting",
    title: "Comforting Prayers",
    estimatedMinutes: 5,
    sourceAttribution: "Traditional Orthodox Prayer Book",
    text: [
      "The Lord is my shepherd; I shall not want. He maketh me to lie down in green pastures: He leadeth me beside the still waters. He restoreth my soul.",
      "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for Thou art with me; Thy rod and Thy staff they comfort me.",
    ],
  },
];

/* --------------------------------- Fasting ---------------------------------- */

export const FASTS: FastPeriod[] = [
  {
    id: "apostles-fast",
    title: "Apostles' Fast",
    startDate: "2025-06-16",
    endDate: "2025-06-28",
    description: "A fast in preparation for the Feast of Ss. Peter and Paul, of variable length beginning the Monday after All Saints Sunday.",
    permittedFoods: "Fish, wine and oil are permitted on most days; strict fasting on Wednesdays and Fridays.",
    liturgicalContext: "Concludes with the Feast of the Holy Apostles Peter and Paul on June 29.",
  },
  {
    id: "dormition-fast",
    title: "Dormition Fast",
    startDate: "2025-08-01",
    endDate: "2025-08-14",
    description: "A strict two-week fast in preparation for the Dormition of the Most Holy Theotokos.",
    permittedFoods: "Fish is permitted only on the Feast of the Transfiguration (August 6); otherwise wine and oil on weekends.",
    liturgicalContext: "Concludes with the Feast of the Dormition of the Theotokos on August 15.",
  },
  {
    id: "nativity-fast",
    title: "Nativity Fast",
    startDate: "2025-11-15",
    endDate: "2025-12-24",
    description: "A forty-day fast in preparation for the Nativity of Christ, moderate in the early weeks and stricter as the feast approaches.",
    permittedFoods: "Fish permitted on most days until December 20; wine and oil on weekends.",
    liturgicalContext: "Concludes with the Feast of the Nativity of Christ on December 25.",
  },
  {
    id: "great-lent",
    title: "Great Lent",
    startDate: "2026-02-23",
    endDate: "2026-04-11",
    description: "The forty-day fast preceding Holy Week and Pascha, the strictest fasting period of the liturgical year.",
    permittedFoods: "Wine and oil on weekends; strict abstinence from meat, dairy and fish on weekdays.",
    liturgicalContext: "Concludes with Holy Week and the Feast of Feasts, Pascha.",
  },
];

export const CURRENT_FAST_LABEL = "No Fast";

/* -------------------------------- Resources --------------------------------- */

export const RESOURCE_ITEMS: ResourceItem[] = [
  { id: "res-fathers-1", category: "church-fathers", title: "St. John Chrysostom — On the Priesthood", subtitle: "Homilies & letters" },
  { id: "res-fathers-2", category: "church-fathers", title: "St. Basil the Great — On the Holy Spirit", subtitle: "Theological treatise" },
  { id: "res-fathers-3", category: "church-fathers", title: "St. Gregory Palamas — The Triads", subtitle: "Hesychast theology" },
  { id: "res-articles-1", category: "articles", title: "Understanding the Divine Liturgy", subtitle: "12 min read" },
  { id: "res-articles-2", category: "articles", title: "Why Do We Fast?", subtitle: "8 min read" },
  { id: "res-articles-3", category: "articles", title: "Icons: Windows to Heaven", subtitle: "10 min read" },
  { id: "res-videos-1", category: "videos", title: "Introduction to Orthodox Christianity", subtitle: "24 min" },
  { id: "res-videos-2", category: "videos", title: "A Tour of the Divine Liturgy", subtitle: "18 min" },
  { id: "res-books-1", category: "books", title: "The Orthodox Church — Kallistos Ware", subtitle: "Foundational reading" },
  { id: "res-books-2", category: "books", title: "The Way of a Pilgrim", subtitle: "Classic spiritual text" },
  { id: "res-audio-1", category: "audio-library", title: "Vespers — Live Recording", subtitle: "52 min" },
  { id: "res-audio-2", category: "audio-library", title: "Byzantine Chant Sampler", subtitle: "34 min" },
];

/* -------------------------------- Parishes ----------------------------------- */

const CHICAGO_CLERGY: ClergyMember[] = [
  { name: "Fr. Michael Popescu", role: "Parish Priest" },
  { name: "Fr. Daniel Ionescu", role: "Assistant Priest" },
];

const SUNDAY_SCHEDULE = [
  { label: "Orthros", time: "9:00 AM" },
  { label: "Divine Liturgy", time: "10:00 AM" },
];

export const PARISHES: Parish[] = [
  {
    id: "st-nicholas-chicago",
    name: "St. Nicholas Romanian Orthodox Church",
    jurisdiction: "Romanian Orthodox Episcopate of America",
    address: "2831 N Mango Ave",
    city: "Chicago",
    state: "IL",
    latitude: 41.9319,
    longitude: -87.7694,
    distanceMi: 2.1,
    phone: "(773) 555-0142",
    email: "office@stnicholaschicago.org",
    website: "stnicholaschicago.org",
    clergy: CHICAGO_CLERGY,
    serviceSchedule: SUNDAY_SCHEDULE,
    verifiedAt: "2025-04-01",
  },
  {
    id: "holy-trinity-crestwood",
    name: "Holy Trinity Romanian Orthodox Church",
    jurisdiction: "Romanian Orthodox Episcopate of America",
    address: "13139 Cicero Ave",
    city: "Crestwood",
    state: "IL",
    latitude: 41.6461,
    longitude: -87.7434,
    distanceMi: 7.3,
    phone: "(708) 555-0198",
    email: "office@holytrinitycrestwood.org",
    website: "holytrinitycrestwood.org",
    clergy: [{ name: "Fr. Ioan Constantinescu", role: "Parish Priest" }],
    serviceSchedule: SUNDAY_SCHEDULE,
    verifiedAt: "2025-03-18",
  },
  {
    id: "st-mary-cicero",
    name: "St. Mary Romanian Orthodox Church",
    jurisdiction: "Romanian Orthodox Episcopate of America",
    address: "5432 W 25th Pl",
    city: "Cicero",
    state: "IL",
    latitude: 41.8456,
    longitude: -87.7601,
    distanceMi: 9.8,
    phone: "(708) 555-0176",
    email: "office@stmarycicero.org",
    website: "stmarycicero.org",
    clergy: [{ name: "Fr. Alexandru Marin", role: "Parish Priest" }],
    serviceSchedule: SUNDAY_SCHEDULE,
    verifiedAt: "2025-02-27",
  },
];

/* --------------------------------- Events ------------------------------------ */

export const EVENTS: EventItem[] = [
  {
    id: "parish-feast-day",
    title: "Parish Feast Day",
    description:
      "Join us for the annual Parish Feast Day celebration with Divine Liturgy, procession, and a festive meal hosted by the parish community.",
    startDateTime: "2025-05-18T10:00:00",
    endDateTime: "2025-05-18T14:00:00",
    allDay: false,
    timezone: "America/Chicago",
    parishName: "St. John the Theologian Church",
    location: "Des Plaines, IL",
    status: "upcoming",
  },
  {
    id: "young-adults-retreat",
    title: "Young Adults Retreat",
    description:
      "A weekend retreat for young adults (18–35) featuring talks, discussion groups, services and fellowship at St. Iakovos Retreat Center.",
    startDateTime: "2025-05-24T09:00:00",
    endDateTime: "2025-05-25T15:00:00",
    allDay: true,
    timezone: "America/Chicago",
    parishName: "St. Iakovos Retreat Center",
    location: "Kansasville, WI",
    status: "upcoming",
  },
  {
    id: "diocesan-assembly",
    title: "Diocesan Assembly",
    description: "The annual Diocesan Assembly bringing together clergy and lay delegates from across the Episcopate.",
    startDateTime: "2025-06-07T09:00:00",
    endDateTime: "2025-06-07T17:00:00",
    allDay: false,
    timezone: "America/Chicago",
    parishName: "Diocesan Center",
    location: "Chicago, IL",
    status: "upcoming",
  },
  {
    id: "pilgrimage-romania",
    title: "Pilgrimage to Romania",
    description:
      "A two-week pilgrimage visiting the painted monasteries of Bucovina, the monastic communities of Moldavia, and the holy sites of Bucharest.",
    startDateTime: "2025-06-15T00:00:00",
    endDateTime: "2025-06-29T00:00:00",
    allDay: true,
    timezone: "Europe/Bucharest",
    parishName: "Episcopate Pilgrimage Office",
    location: "Bucharest, Romania",
    status: "upcoming",
  },
];

/* --------------------------------- Notes seed (empty by default) -------------- */

export const INITIAL_NOTES: NoteEntry[] = [];
