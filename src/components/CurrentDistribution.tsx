import type { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import { useContext, useState } from "react";

import { DataContext } from "../context/DataContext";
import { useDarkMode } from "../hooks/useDarkMode";
import { getCurrentDistribution } from "../lib/getCurrentDistribution";

import { Card } from "./Card";
import { Loading } from "./Loading";

export const CurrentDistribution = ({ gridArea }: { gridArea: string }) => {
  const rawData = useContext(DataContext);
  const mode = useDarkMode();
  const [view, setView] = useState<"Simple" | "Detailed">("Simple");

  if (rawData === undefined) {
    return (
      <Card gridArea={gridArea} title="Distribution of applicants">
        <div className="w-full h-full flex items-center justify-center">
          <Loading />
        </div>
      </Card>
    );
  }

  const data = getCurrentDistribution(rawData, view);

  const option: EChartsOption = {
    grid: { top: 20, right: 10, bottom: 50, left: 35 },
    xAxis: {
      type: "category",
      data: data.map(({ id }) => id),
      name: "Score Bracket",
      nameLocation: "middle",
      nameGap: 30,
    },
    yAxis: {
      type: "value",
      show: true,
      name: "Number of Applicants",
      nameLocation: "middle",
      axisLabel: { show: false },
      splitLine: { show: false },
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
    <Card gridArea={gridArea} title={null}>
      <div className="cumulative-title-container">
        <h3 className="text-xl font-semibold card-title mb-1">Distribution of applicants</h3>
        <select
          className="select select-bordered select-sm max-w-xs mb-4"
          onChange={(e) => setView(e.target.value as "Simple" | "Detailed")}
        >
          <option>Simple</option>
          <option>Detailed</option>
        </select>
      </div>
      <EChartsReact option={option} style={{ height: "100%", minHeight: 250 }} theme={mode} />
    </Card>
  );
};
