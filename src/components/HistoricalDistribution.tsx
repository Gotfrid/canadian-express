import type { EChartsOption } from "echarts";
import ReactECharts from "echarts-for-react";
import { DataContext } from "../containers/DataContainer";
import { useContext, useState } from "react";
import { getCleanData } from "../lib/getCleanData";
import ProgramSelect from "./ProgramSelect";

const CumulativeDistribution = ({ gridArea }: { gridArea: string }) => {
  const rawData = useContext(DataContext);

  const [program, setProgram] = useState<DrawName>("No Program Specified");

  const data = getCleanData(rawData!)
    .filter(({ name }) => name === program)
    .reverse();

  const options: EChartsOption = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "category",
      data: data.map(({ date }) => date),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: data.map(({ score }) => score),
        type: "line",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <div className="card" style={{ gridArea }}>
      <div className="cumulative-title-container">
        <h3>Passing score dynamics</h3>
        <ProgramSelect value={program} setValue={setProgram} />
      </div>
      <ReactECharts option={options} />
    </div>
  );
};

export default CumulativeDistribution;
