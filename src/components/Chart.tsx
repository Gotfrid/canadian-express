import EChartsReact, { EChartsOption } from "echarts-for-react";
import { Card } from "./Card";
import { useDarkMode } from "../hooks/useDarkMode";

interface Props {
  gridArea: string;
  title: string;
  option: EChartsOption;
}

export const Chart = ({ gridArea, title, option }: Props) => {
  const mode = useDarkMode();
  return (
    <Card gridArea={gridArea} title={title}>
      <EChartsReact option={option} style={{ height: "100%", minHeight: 250 }} theme={mode} />
    </Card>
  );
};
