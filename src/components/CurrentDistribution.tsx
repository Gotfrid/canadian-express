import { useContext, useEffect, useState } from "react";
import { DataContext } from "../containers/DataContainer";
import { getCurrentDistribution } from "../lib/getCurrentDistribution";
import EChartsReact from "echarts-for-react";
import type { EChartsOption } from "echarts";

export const CurrentDistribution = ({ gridArea }: { gridArea: string }) => {
  const rawData = useContext(DataContext);

  const data = getCurrentDistribution(rawData!);

  const option: EChartsOption = {
    grid: { top: 10, right: 10, bottom: 20, left: 10 },
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
    <div className="card" style={{ gridArea }}>
      <h3>Distribution of applicants by score bracket</h3>
      <EChartsReact option={option} style={{ height: "100%", minHeight: 150 }} />
    </div>
  );
};
