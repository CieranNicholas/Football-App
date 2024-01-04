export type apiOptions = {
  next: any;
  headers: {
    "X-Auth-Token": string | any;
    "Content-Type": string | any;
  };
};

export type matchesArea = {
  id?: number;
  name: string;
};
export type matchesCompetition = {
  id?: number;
  name: string;
  emblem: string;
  code: string;
  type: string;
};
export type matchesHomeTeam = {
  id?: number;
  name: string;
  crest: string;
};
export type matchesAwayTeam = {
  id?: number;
  name: string;
  crest: string;
};
export type scores = {
  fullTime: {
    home: number;
    away: number;
  };
  halfTime?: {
    home: number;
    away: number;
  };
};
export type season = {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner: null;
};
export type standings = {
  stage: string;
  type: string;
  table: table;
};
export type table = {
  position: number;
  team: teamType;
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
};

export type teamType = {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
};

export type matchesType = {
  area: matchesArea;
  competition: matchesCompetition;
  competitionCode: string;
  id: number;
  utcDate: string;
  status: string;
  matchday?: number;
  homeTeam?: matchesHomeTeam;
  awayTeam?: matchesAwayTeam;
  score?: scores;
};

export const CompetitionCodes = {
  BrazilSerieA: "BSA",
  Championship: "ELC",
  PremierLeague: "PL",
  ChampionsLeague: "CL",
  Euros: "EC",
  Ligue1: "FL1",
  Bundesliga: "BL1",
  SeriaA: "SA",
  Eredivisie: "DED",
  PrimeiraLiga: "PPL",
  CopaLibertadores: "CLI",
  LaLiga: "PD",
};

export interface ICompetitions {
  name: string;
  description: string;
  href: string;
  icon: string;
}

export type standingsType = {
  area: matchesArea;
  competition: matchesCompetition;
  season: season;
  standings: standings;
};

export type newsType = {
  title: string;
  url: string;
  image: string;
};

export const Competitions: ICompetitions[] = [
  {
    name: "All",
    description: "",
    href: "",
    icon: "",
  },
  {
    name: "PremierLeague",
    description: "England",
    href: "PremierLeague",
    icon: "https://www.countryflags.com/wp-content/uploads/england-flag-jpg-xl.jpg",
  },
  {
    name: "Ligue 1",
    description: "France",
    href: "Ligue1",
    icon: "https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png",
  },
  {
    name: "La Liga",
    description: "Spain",
    href: "LaLiga",
    icon: "https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png",
  },
  {
    name: "Bundesliga",
    description: "Germany",
    href: "Bundesliga",
    icon: "https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png",
  },
  {
    name: "Seria A",
    description: "Italy",
    href: "SeriaA",
    icon: "https://www.countryflags.com/wp-content/uploads/italy-flag-png-large.png",
  },

  {
    name: "Eredivisie",
    description: "Netherlands",
    href: "Eredivisie",
    icon: "https://www.countryflags.com/wp-content/uploads/netherlands-flag-png-large.png",
  },
  {
    name: "Championship",
    description: "England",
    href: "Championship",
    icon: "https://www.countryflags.com/wp-content/uploads/england-flag-jpg-xl.jpg",
  },
  {
    name: "Liga Portugal",
    description: "Portugal",
    href: "PrimeiraLiga",
    icon: "https://www.countryflags.com/wp-content/uploads/portugal-flag-400.png",
  },
  {
    name: "Seria A",
    description: "Brazil",
    href: "BrazilSerieA",
    icon: "https://www.countryflags.com/wp-content/uploads/brazil-flag-png-large.png",
  },
  {
    name: "UEFA Champions League",
    description: "Europe",
    href: "ChampionsLeague",
    icon: "https://www.countryflags.com/wp-content/uploads/europe-flag-jpg-xl.jpg",
  },
  {
    name: "UEFA European Championship",
    description: "Europe",
    href: "Euros",
    icon: "https://www.countryflags.com/wp-content/uploads/europe-flag-jpg-xl.jpg",
  },
];
