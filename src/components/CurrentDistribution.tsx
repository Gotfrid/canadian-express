import { useContext } from "react";
import { DataContext } from "../containers/DataContainer";
import { getCurrentDistribution } from "../lib/getCurrentDistribution";
import EChartsReact from "echarts-for-react";
import type { EChartsOption } from "echarts";
import { useDarkMode } from "../hooks/useDarkMode";
import { Card } from "./Card";

export const CurrentDistribution = ({ gridArea }: { gridArea: string }) => {
  const rawData = useContext(DataContext);
  const mode = useDarkMode();

  const data = getCurrentDistribution(rawData!);

  const option: EChartsOption = {
    grid: { top: 20, right: 10, bottom: 20, left: 10 },
    xAxis: {
      type: "category",
      data: data.map(({ id }) => id),
    },
    yAxis: {
      type: "value",
      show: false,
    },
    series: {
      type: "bar",
      data: data.map(({ value }) => value),
      label: {
        show: true,
        position: "top",
        formatter: ({ data }) => Intl.NumberFormat("en-US").format(+data),
      },
    },
  };

  return (
    <Card gridArea={gridArea} title="Distribution of applicants">
      <EChartsReact option={option} style={{ height: "100%", minHeight: 250 }} theme={mode} />
    </Card>
  );
};
