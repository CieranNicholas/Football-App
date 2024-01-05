import { matchesType } from "@/types";
import {
  getFormattedDate,
  getFormattedTime,
  getFormattedDateDay,
} from "@/helpers";

export default function MatchInfo({ match }: { match: matchesType }) {
  return (
    <div className='flex items-center bg-card p-4 gap-4'>
      <div className='w-2/3 flex flex-col justify-center gap-2 pr-8 border-r border-gray-200'>
        <span className='flex items-center'>
          <img src={match.homeTeam?.crest} className='h-10 mr-4' />
          <p>{match.homeTeam?.name}</p>
          {/* <p>{match.score?.fullTime.home}</p> */}
          <p className='ml-auto'>0</p>
        </span>
        <span className='flex items-center'>
          <img src={match.awayTeam?.crest} className='h-10 mr-4' />
          <p>{match.awayTeam?.name}</p>
          {/* <p>{match.score?.fullTime.away}</p> */}
          <p className='ml-auto'>1</p>
        </span>
      </div>
      {match.status === "FINISHED" ? (
        <div className='w-1/3 flex flex-col items-center justify-center'>
          {/* <p>{getFormattedDate(new Date(match.utcDate))}</p>
        <p>{getFormattedTime(new Date(match.utcDate))}</p> */}
          <p className='text-sm font-bold'>FT</p>
          <p className='text-sm text-gray-400'>
            {getFormattedDateDay(new Date(match.utcDate))}
          </p>
        </div>
      ) : (
        <div className='w-1/3 flex flex-col items-center justify-center'>
          <p className='text-sm text-gray-400'>
            {getFormattedDateDay(new Date(match.utcDate))}
          </p>
          <p>{getFormattedTime(new Date(match.utcDate))}</p>
        </div>
      )}
    </div>
  );
}
