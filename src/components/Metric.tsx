import type { FC } from "react";
import { Card } from "./Card";
import { Loading } from "./Loading";

interface Props {
  gridArea: string;
  title: string;
  value: string | undefined;
}

export const Metric: FC<Props> = ({ gridArea, title, value }) => {
  return (
    <Card gridArea={gridArea} title={title}>
      {value === undefined ? (
        <Loading />
      ) : (
        <p className="text font-extralight my-0 sm:max-w-xs sm:text-3xl sm:my-2 ">{value}</p>
      )}
    </Card>
  );
};
