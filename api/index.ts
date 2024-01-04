import { apiOptions, matchesType } from "@/types";
import fs from "fs";
import path from "path";

const URL = "https://api.football-data.org/v4/";
const NEWS_URL = "https://newsapi.org/v2/";

const options: apiOptions = {
  next: { revalidate: 30 },
  headers: {
    "X-Auth-Token": process.env.API_TOKEN,
    "Content-Type": "application/json",
  },
};

export const getDates = () => {
  const today = new Date();
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return [year, month, day].join("-");
  };

  return [formatDate(today), formatDate(nextWeek)];
};

export const getMatchesfootball = async () => {
  const [todayString, nextWeekString] = getDates();
  console.log(todayString, nextWeekString); // O

  const matchData = await fetch(
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

export const filterLeague = async (filterCompetitionCode: string) => {
  const data = await getMatchesfootball();
  const matches: matchesType[] = data?.matches;
  const getData = matches.filter(
    (item) => item.competition.code === filterCompetitionCode
  );
  return getData;
};

export const fetchFootballNews = async () => {
  // const data = await fetch(`${NEWS_URL}everything?apiKey=${process.env.NEWS_API_KEY}&q=football&sortBy=publishedAt&domains=www.skysports.com,bbc.co.uk,dailymail.co.uk,theguardian.com,talksport.com,goal.com,www.football.london`);
  // return data.json();

  const filePath = path.join(process.cwd(), "api/news.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);
  return await data;
};
