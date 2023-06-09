import * as echarts from "echarts";
import { useContext, useEffect } from "react";

import { DataContainer } from "../containers/DataContainer";
import { DataContext } from "../context/DataContext";
import { getDrawSize } from "../lib/getDrawSize";
import { getLastSampleDate } from "../lib/getLastSampleDate";
import { getPassingScore } from "../lib/getPassingScore";
import { chalk } from "../misc/echartThemes";

import { CurrentDistribution } from "./CurrentDistribution";
import CumulativeDistribution from "./HistoricalDistribution";
import { Metric } from "./Metric";
import { getDrawName } from "../lib/getDrawnName";

echarts.registerTheme("dark", chalk);

const GridContent = () => {
  const data = useContext(DataContext);

  return (
    <>
      <Metric gridArea="draw" title="Draw Name" value={getDrawName(data)} />
      <Metric gridArea="update" title="Date" value={getLastSampleDate(data)} />
      <Metric gridArea="size" title="Size" value={getDrawSize(data)} />
      <Metric gridArea="passing" title="Score" value={getPassingScore(data)} />
      <CurrentDistribution gridArea="distribution" />
      <CumulativeDistribution gridArea="cumulative" />
    </>
  );
};

export const Grid = () => {
  useEffect(() => {
    document.getElementById("loading-placeholder")?.style.setProperty("display", "none");
  });
  return (
    <div className="grid">
      <DataContainer>
        <GridContent />
      </DataContainer>
    </div>
  );
};
