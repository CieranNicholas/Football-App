import { getMatchesfootball, getDates, fetchFootballNews } from "@/api/index";
import { matchesType } from "@/types";
import MatchInfo from "@/components/MatchInfo";
import NewsSideBar from "@/components/NewsSideBar";

export default async function Fixtures() {
  const data = await getMatchesfootball();
  const matches = await data.matches;

  const newsData = await fetchFootballNews();
  const news = newsData.articles;

  return (
    <main className='p-12'>
      <section className='w-2/3 mx-auto flex'>
        <div className='w-2/3 flex flex-col gap-4'>
          {matches.map((obj: matchesType) => {
            return <MatchInfo match={obj} key={obj.id} />;
          })}
        </div>
        <NewsSideBar news={news} />
      </section>
    </main>
  );
}
