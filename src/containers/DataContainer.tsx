import useSWR from "swr";
import { ReactNode, createContext } from "react";

const fetcher = (url: string): Promise<Draw[]> => fetch(url).then((res) => res.json().then((d) => d.rounds));

export const DataContext = createContext<Draw[] | undefined>(undefined);

export const DataContainer = ({ children }: { children: ReactNode }) => {
  const { data, error, isLoading } = useSWR(import.meta.env.PUBLIC_DATA_URL, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
