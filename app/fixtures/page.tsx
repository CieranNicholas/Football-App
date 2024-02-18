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
    <main className='p-12 py-24 pb-0'>
      <section className='w-full flex flex-col items-center xl:w-2/3 xl:flex-row xl:items-start xl:mx-auto'>
        <div className='w-full flex flex-col gap-4 md:w-full'>
          {matches.map((obj: matchesType) => {
            return <MatchInfo match={obj} key={obj.id} />;
          })}
        </div>
        <NewsSideBar news={news} />
      </section>
    </main>
  );
}
