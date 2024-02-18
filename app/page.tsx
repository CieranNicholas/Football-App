import { fetchFootballNews } from "@/api/index";
import NewsCarousel from "@/components/NewsCarousel";
import NewsList from "@/components/NewsList";

export default async function Home() {
  const newsData = await fetchFootballNews();
  const news = newsData.articles;
  const topNews = news.slice(0, 5);
  const otherNews = news.slice(5, news.length);

  return (
    <main className='p-12 py-24 pb-0'>
      <section className='w-full mx-auto mb-8 lg:w-2/3'>
        <NewsCarousel news={topNews} />
      </section>
      <section className='w-full lg:mx-auto lg:w-2/3 mb-8'>
        <NewsList news={otherNews} />
      </section>
    </main>
  );
}
