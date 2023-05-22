import { useContext } from "react";
import { DataContext } from "../containers/DataContainer";
import { getLastSampleDate } from "../lib/getLastSampleDate";

export const LastUpdateCard = ({ gridArea }: { gridArea: string }) => {
  const data = useContext(DataContext);
  return (
    <div className="card" style={{ gridArea }}>
      <h3>Update date</h3>
      <p>{getLastSampleDate(data ?? [])}</p>
    </div>
  );
};
