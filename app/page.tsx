import { fetchFootballNews } from "@/api/index";
import { Competitions, ICompetitions } from "@/types";
import NewsCarousel from "@/components/NewsCarousel";
import NewsList from "@/components/NewsList";
import Link from "next/link";

export default async function Home() {
  const newsData = await fetchFootballNews();
  const news = newsData.articles;
  const topNews = news.slice(0, 5);
  const otherNews = news.slice(5, news.length);

  return (
    <main className='p-12'>
      <section className='w-2/3 mx-auto mb-8'>
        <h1 className='text-4xl font-bold mb-4'>Latest Football News</h1>
        <NewsCarousel news={topNews} />
      </section>
      <section className="w-2/3 mx-auto mb-8'">
        <NewsList news={otherNews} />
      </section>

      <section className='w-2/3 mx-auto mb-8'>
        <h1 className='text-4xl font-bold mb-4'>Fixtures</h1>
        <div className='flex flex-wrap w-full gap-x-24 gap-y-12'>
          {Competitions.map((competition: ICompetitions) => (
            <Link
              href={
                competition.href === ""
                  ? "/fixtures"
                  : `/fixtures/${competition.href}`
              }
              className='flex flex-col flex-wrap justify-end p-2 rounded-md w-48 h-24 hover:brightness-50 relative cursor-pointer ease-linear transition-all duration-150 bg-primary-foreground'
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent), url(${competition.icon})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              key={competition.href}
            >
              <h2 className='font-bold text-white'>{competition.name}</h2>
            </Link>
          ))}
        </div>
      </section>
      <section className='w-2/3 mx-auto mb-8'>
        <h1 className='text-4xl font-bold mb-4'>Tables</h1>
        <div className='flex flex-wrap w-full justify-start gap-x-24 gap-y-12'>
          {Competitions.filter(
            (competition: ICompetitions) => competition.href !== ""
          ).map((competition: ICompetitions) => (
            <Link
              href={`/tables/${competition.href}`}
              className='flex flex-col flex-wrap justify-end p-2 rounded-md w-48 h-24 hover:brightness-50 relative cursor-pointer ease-linear transition-all duration-150 bg-primary-foreground'
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent), url(${competition.icon})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              key={competition.href}
            >
              <h2 className='font-bold text-white'>{competition.name}</h2>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
