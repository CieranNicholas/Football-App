import { getMatchesfootball, getDates } from "@/api/index";
import { matchesType } from "@/types";
import MatchInfo from "@/components/MatchInfo";

export default async function Fixtures() {
  const data = await getMatchesfootball();

  const matches = await data.matches;

  const [today, weekToday] = getDates();
  return (
    <main className='p-24'>
      <h1>From Today To {weekToday}</h1>
      {matches.map((obj: matchesType) => {
        return <MatchInfo match={obj} key={obj.id} />;
      })}
    </main>
  );
}
