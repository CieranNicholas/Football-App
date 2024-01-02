import { CompetitionCodes, apiOptions, matchesType } from "@/types";
import { promises as fs } from "fs";

const options: apiOptions = {
  next: { revalidate: 30 },
  headers: {
    "X-Auth-Token": process.env.API_TOKEN,
    "Content-Type": "application/json",
  },
};

export const getMatchesfootball = async () => {
  // const matchData = await fetch(
  //   "https://api.football-data.org/v4/matches",
  //   options
  // );
  // return matchData.json();
  const file = await fs.readFile(
    process.cwd() + "/api/matchData.json",
    "utf-8"
  );
  const data = JSON.parse(file);
  return data;
};

export const getLeagueStandings = async (CompetitionCode: string) => {
  const file = await fs.readFile(process.cwd() + "/api/PlData.json", "utf-8");

  const data = JSON.parse(file);

  return data;
};

const todayDate = new Date();
const getDateMonth = new Date(todayDate.getTime());
getDateMonth.setDate(todayDate.getDate() - 1);
const year = getDateMonth.getFullYear();
const month = String(getDateMonth.getMonth() + 1).padStart(2, "0");
const day = String(getDateMonth.getDate()).padStart(2, "0");

const yesterday = [year, month, day].join("-");

export const getMatchesfootballFinished = async () => {
  const matchData = await fetch(
    `https://api.football-data.org/v4/matches?date=${yesterday}`,
    options
  );
  return matchData.json();
};

export const filterLeague = async (filterCompetitionCode: string) => {
  console.log(filterCompetitionCode);
  const data = await getMatchesfootball();
  const matches: matchesType[] = data?.matches;
  const getData = matches.filter(
    (item) => item.competition.code === filterCompetitionCode
  );
  return getData;
};
