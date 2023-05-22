import { useContext } from "react";
import { DataContext } from "../containers/DataContainer";
import { getNumberOfInvites } from "../lib/getNumberOfInvites";

export const NumberOfInvitesCard = ({ gridArea }: { gridArea: string }) => {
  const data = useContext(DataContext);
  return (
    <div className="card">
      <h3>Total invites</h3>
      <p>{getNumberOfInvites(data![0])}</p>
    </div>
  );
};
