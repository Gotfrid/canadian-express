import type { ReactNode } from "react";
import { useDrawData } from "../hooks/useDrawData";
import { DataContext } from "../context/DataContext";

export const DataContainer = ({ children }: { children: ReactNode }) => {
  const data = useDrawData();
  if (data === undefined) {
    return <div>Loading...</div>;
  }
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
