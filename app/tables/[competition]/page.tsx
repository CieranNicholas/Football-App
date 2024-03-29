import { fetchFootballNews, getLeagueStandings } from "@/api/index";
import { CompetitionCodes, table } from "@/types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getValueByKey } from "@/helpers";
import NewsSideBar from "@/components/NewsSideBar";

export default async function TablesDetails({
  params,
}: {
  params: { competition: string };
}) {
  const competitionKey = getValueByKey(params.competition, CompetitionCodes);
  const data = await getLeagueStandings(competitionKey as string);
  const standings = data.standings[0].table;

  const newsData = await fetchFootballNews();
  const news = newsData.articles;
  return (
    <main className='p-12'>
      <section className='w-full flex flex-col items-center xl:w-2/3 xl:flex-row xl:items-start xl:mx-auto'>
        <Table>
          <TableCaption>League Standings</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Club</TableHead>
              <TableHead>MP</TableHead>
              <TableHead>W</TableHead>
              <TableHead>D</TableHead>
              <TableHead>L</TableHead>
              <TableHead>GF</TableHead>
              <TableHead>GA</TableHead>
              <TableHead>GD</TableHead>
              <TableHead>Pts</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {standings.map((obj: table) => (
              <TableRow key={obj.team.id}>
                <TableCell className='flex items-center gap-5'>
                  <p>{obj.position}</p>
                  <img src={obj.team.crest} className='h-10' />
                  <p>{obj.team.name}</p>
                </TableCell>
                <TableCell>{obj.playedGames}</TableCell>
                <TableCell>{obj.won}</TableCell>
                <TableCell>{obj.draw}</TableCell>
                <TableCell>{obj.lost}</TableCell>
                <TableCell>{obj.goalsFor}</TableCell>
                <TableCell>{obj.goalsAgainst}</TableCell>
                <TableCell>{obj.goalDifference}</TableCell>
                <TableCell>{obj.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <NewsSideBar news={news} />
      </section>
    </main>
  );
}
