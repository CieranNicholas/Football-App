import { matchesType } from "@/types";
import { getFormattedDate, getFormattedTime } from "@/helpers";

export default function MatchInfo({ match }: { match: matchesType }) {
  return (
    <div className='flex bg-primary-foreground mb-5 p-5 w-96 hover:cursor-pointer hover:bg-secondary transition-colors'>
      <div className='flex flex-col gap-4 w-2/3'>
        <div className='flex items-center justify-between pr-5'>
          <img src={match.homeTeam?.crest} className='h-10' />
          <p>{match.homeTeam?.name}</p>
          <p>{match.score?.fullTime.home}</p>
        </div>
        <div className='flex items-center justify-between pr-5'>
          <img src={match.awayTeam?.crest} className='h-10' />
          <p>{match.awayTeam?.name}</p>
          <p>{match.score?.fullTime.away}</p>
        </div>
      </div>

      {match.status == "IN_PLAY" ? (
        <>
          <div className='flex flex-col pl-4 border-l-2 justify-center items-center w-1/3'>
            <p>
              {match.score?.fullTime.home} - {match.score?.fullTime.away}
            </p>
            <p>Live</p>
          </div>
        </>
      ) : (
        <>
          <div className='flex flex-col pl-4 border-l-2 justify-center items-center w-1/3'>
            <p>{getFormattedDate(new Date(match.utcDate))}</p>
            <p>{getFormattedTime(new Date(match.utcDate))}</p>
          </div>
        </>
      )}
    </div>
  );
}

// return (
//   <main className='p-24'>
//     {leagueData.map((obj: matchesType) => {
//       return <MatchInfo match={obj} key={obj.id} />;
//     })}
//   </main>
// );
