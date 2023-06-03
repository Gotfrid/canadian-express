import type { FC } from "react";

interface Props {
  gridArea: string;
  title: string;
  value: string;
}

export const Metric: FC<Props> = ({ gridArea, title, value }) => {
  return (
    <div className="card" style={{ gridArea }}>
      <h3 className="text-xl font-semibold card-title">{title}</h3>
      <p style={{ whiteSpace: "pre" }}>{value}</p>
    </div>
  );
};
