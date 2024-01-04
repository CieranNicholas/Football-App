import { CompetitionCodes, apiOptions, matchesType } from "@/types";
import { promises as fs } from "fs";

const URL = "https://api.football-data.org/v4/";

const options: apiOptions = {
  next: { revalidate: 30 },
  headers: {
    "X-Auth-Token": process.env.API_TOKEN,
    "Content-Type": "application/json",
  },
};

export const getDates = () => {
  const today = new Date();
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000); // Add 7 days to today's date

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed in JavaScript
    const day = String(date.getDate()).padStart(2, "0");

    return [year, month, day].join("-");
  };

  return [formatDate(today), formatDate(nextWeek)];
};

export const getMatchesfootball = async () => {
  const [todayString, nextWeekString] = getDates();
  console.log(todayString, nextWeekString); // O

  const matchData = await fetch(
    // "https://api.football-data.org/v4/matches",
    `${URL}matches?dateFrom=${todayString}&dateTo=${nextWeekString}`,
    options
  );
  return matchData.json();
};

export const getLeagueStandings = async (code: string) => {
  const url = `${URL}competitions/${code}/standings`;
  const standings = await fetch(url, options);
  const data = standings.json();

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
  const data = await getMatchesfootball();
  const matches: matchesType[] = data?.matches;
  const getData = matches.filter(
    (item) => item.competition.code === filterCompetitionCode
  );
  return getData;
};
