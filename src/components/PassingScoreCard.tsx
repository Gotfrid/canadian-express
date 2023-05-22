import { useContext } from "react";
import { DataContext } from "../containers/DataContainer";
import { getPassingScore } from "../lib/getPassingScore";

export const PassingScoreCard = ({ gridArea }: { gridArea: string }) => {
  const data = useContext(DataContext);
  return (
    <div className="card" style={{ gridArea }}>
      <h3>Passing score</h3>
      <p>{getPassingScore(data![0])}</p>
    </div>
  );
};
