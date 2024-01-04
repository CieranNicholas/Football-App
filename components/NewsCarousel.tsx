"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { newsType } from "@/types";

export default function NewsCarousel({ news }: { news: newsType[] }) {
  const topNews = news.slice(0, 3);
  return (
    <Carousel>
      <CarouselContent>
        {news.map((article: newsType) => (
          <CarouselItem key={article.url}>
            <div
              className='flex flex-col justify-end items-start h-96 p-10'
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent), url(${article.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => window.open(article.url, "_blank")}
            >
              <h2 className='text-3xl font-bold'>{article.title}</h2>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
