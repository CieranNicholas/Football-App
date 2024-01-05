import { filterLeague, getDates } from "@/api/index";
import { getValueByKey } from "@/helpers";
import { CompetitionCodes, matchesType } from "@/types";
import MatchInfo from "@/components/MatchInfo";
import NewsSideBar from "@/components/NewsSideBar";
import { fetchFootballNews, getLeagueStandings } from "@/api/index";

export default async function FixturesDetails({
  params,
}: {
  params: { competition: string };
}) {
  const competitionKey = getValueByKey(params.competition, CompetitionCodes);
  const leagueData = await filterLeague(competitionKey as string);

  const newsData = await fetchFootballNews();
  const news = newsData.articles;

  return (
    <main className='p-12'>
      <section className='w-full flex flex-col items-center xl:w-2/3 xl:flex-row xl:items-start xl:mx-auto'>
        <div className='w-2/3 flex flex-col gap-4'>
          {leagueData.map((obj: matchesType) => {
            return <MatchInfo match={obj} key={obj.id} />;
          })}
        </div>
        <NewsSideBar news={news} />
      </section>
    </main>
  );
}
