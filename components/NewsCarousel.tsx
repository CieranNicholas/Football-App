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
  return (
    <Carousel>
      <CarouselContent>
        {news.map((article: newsType) => (
          <CarouselItem key={article.url}>
            <div
              className='flex flex-col justify-end items-start h-80 p-10'
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent), url(${article.image})`,
                backgroundSize: "cover",
                backgroundPosition: "",
              }}
              onClick={() => window.open(article.url, "_blank")}
            >
              <h3 className='font-semibold tracking-tight text-lg md:text-2xl'>
                {article.title}
              </h3>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
