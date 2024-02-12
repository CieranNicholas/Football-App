"use client";
import { useState, useEffect } from "react";
import { getFormattedDate, getFormattedTime } from "@/helpers";
import { newsType } from "@/types";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NewsList({ news }: { news: any }) {
  const [visibleNews, setVisibleNews] = useState<newsType[]>(news.slice(0, 5));
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [pagesAmount, setPagesAmount] = useState<number>(0);

  const incrementIndex = () => {
    if (activeIndex === pagesAmount - 1) return;
    setActiveIndex(activeIndex + 1);
  };
  const decrementIndex = () => {
    if (activeIndex === 0) return;
    setActiveIndex(activeIndex - 1);
  };

  useEffect(() => {
    setPagesAmount(Math.ceil(news.length / 5));
  }, []);

  useEffect(() => {
    setVisibleNews(news.slice(activeIndex * 5, activeIndex * 5 + 5));
  }, [activeIndex]);

  return (
    <div className='bg-card p-4 rounded-sm mb-8'>
      <div className='flex flex-col gap-4 select-none'>
        {visibleNews.map((article: newsType) => (
          <div
            className='p-4 cursor-pointer hover:bg-accent hover:text-accent-foreground ease-linear transition-all duration-150'
            onClick={() => window.open(article.url, "_blank")}
            key={article.publishedAt}
          >
            <span className='flex items-center'>
              <p className='text-primary mr-4'>{article.source.name}</p>
              <p className='text-muted-foreground text-sm'>
                {getFormattedDate(new Date(article.publishedAt))}{" "}
                {getFormattedTime(new Date(article.publishedAt))}
              </p>
            </span>
            <h2 className='text-lg'>{article.title}</h2>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center gap-4'>
        <Button
          variant='ghost'
          className='gap-1 pl-2.5'
          onClick={decrementIndex}
        >
          <ChevronLeft className='h-4 w-4' />
          Previous
        </Button>

        <Button
          variant='ghost'
          className='gap-1 pl-2.5'
          onClick={incrementIndex}
        >
          Next
          <ChevronRight className='h-4 w-4' />
        </Button>
      </div>
    </div>
  );
}
