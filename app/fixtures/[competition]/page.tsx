import { filterLeague, getMatchesfootball } from "@/api/index";
import { CompetitionCodes, matchesType } from "@/types";
import MatchInfo from "@/components/MatchInfo";

const getValueByKey = (
  key: string,
  obj: Record<string, string>
): string | undefined => {
  return obj[key];
};

export default async function FixturesDetails({
  params,
}: {
  params: { competition: string };
}) {
  const competitionKey = getValueByKey(params.competition, CompetitionCodes);

  // const leagueData = await filterLeague(competitionKey as string);

  const matchData = await getMatchesfootball();
  const leagueData = matchData.matches;

  return (
    <main className='p-24'>
      {leagueData.map((obj: matchesType) => {
        return <MatchInfo match={obj} key={obj.id} />;
      })}
    </main>
  );
}
