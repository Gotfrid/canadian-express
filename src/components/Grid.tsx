import * as echarts from "echarts";
import { useContext } from "react";

import { DataContainer } from "../containers/DataContainer";
import { DataContext } from "../context/DataContext";
import { getDrawSize } from "../lib/getDrawSize";
import { getLastSampleDate } from "../lib/getLastSampleDate";
import { getPassingScore } from "../lib/getPassingScore";
import { chalk } from "../misc/echartThemes";

import { CurrentDistribution } from "./CurrentDistribution";
import CumulativeDistribution from "./HistoricalDistribution";
import { Metric } from "./Metric";

echarts.registerTheme("dark", chalk);

const GridContent = () => {
  const data = useContext(DataContext);

  return (
    <>
      <Metric gridArea="update" title="Date" value={getLastSampleDate(data)} />
      <Metric gridArea="size" title="Size" value={getDrawSize(data)} />
      <Metric gridArea="passing" title="Score" value={getPassingScore(data)} />
      <CurrentDistribution gridArea="distribution" />
      <CumulativeDistribution gridArea="cumulative" />
    </>
  );
};

export const Grid = () => {
  return (
    <div className="grid">
      <DataContainer>
        <GridContent />
      </DataContainer>
    </div>
  );
};
