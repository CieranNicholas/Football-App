"use client";
import { useState, useEffect } from "react";
import { getFormattedDate, getFormattedTime } from "@/helpers";
import { newsType } from "@/types";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NewsSideBar({ news }: { news: any }) {
  // increment / decerement news list
  const [visibleNews, setVisibleNews] = useState<newsType[]>(news.slice(0, 7));
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
    setPagesAmount(Math.ceil(news.length / 7));
  }, []);

  useEffect(() => {
    setVisibleNews(news.slice(activeIndex * 5, activeIndex * 5 + 5));
  }, [activeIndex]);
  return (
    <div className='w-1/4 ml-auto'>
      {visibleNews.map((article: newsType) => (
        <div className='border-b border-gray-200 pb-4 cursor-pointer hover:bg-secondary p-4 ease-linear transition-all duration-150'>
          <span className='flex items-center'>
            <p className='text-red-500 mr-4'>{article.source.name}</p>
            <p className='text-muted-foreground text-sm'>
              {getFormattedDate(new Date(article.publishedAt))}
              {getFormattedTime(new Date(article.publishedAt))}
            </p>
          </span>
          <h2 className='text-md'>{article.title}</h2>
        </div>
      ))}
      <div
        className='flex items-center justify-center gap-4 mt-8'
        aria-label='pagination'
      >
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
