import { DataContainer } from "../containers/DataContainer";
import { CurrentDistribution } from "./CurrentDistribution";
import { LastUpdateCard } from "./LastUpdateCard";
import { NumberOfInvitesCard } from "./NumberOfInvitesCard";
import { PassingScoreCard } from "./PassingScoreCard";

export const Grid = () => {
  return (
    <DataContainer>
      <div className="grid">
        <LastUpdateCard gridArea="update" />
        <PassingScoreCard gridArea="passing" />
        <NumberOfInvitesCard gridArea="size" />
        <CurrentDistribution gridArea="distribution" />
      </div>
    </DataContainer>
  );
};
