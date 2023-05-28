import type { EChartsOption } from "echarts";
import ReactECharts from "echarts-for-react";
import { DataContext } from "../containers/DataContainer";
import { useContext, useState } from "react";
import { getCleanData } from "../lib/getCleanData";
import ProgramSelect from "./ProgramSelect";
import dayjs from "dayjs";

const CumulativeDistribution = ({ gridArea }: { gridArea: string }) => {
  const rawData = useContext(DataContext);

  const [program, setProgram] = useState<DrawName>("No Program Specified");

  const data = getCleanData(rawData!)
    .filter(({ name }) => name === program)
    .reverse();

  const options: EChartsOption = {
    grid: { top: 8, right: 8, bottom: 80, left: 36 },
    xAxis: {
      type: "time",
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: data.map(({ date, score }) => [date, score]),
        type: "line",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
      formatter: (val) => {
        // @ts-expect-error
        const date = dayjs(val[0].data[0]).format("DD MMM YY");
        // @ts-expect-error
        const score = val[0].data[1];
        return `<b>${score}</b></br>${date}`;
      },
    },
    dataZoom: {
      show: true,
      bottom: 10,
      start: 85,
    },
  };

  return (
    <div className="card" style={{ gridArea }}>
      <div className="cumulative-title-container">
        <h3>History of passing score by program</h3>
        <ProgramSelect value={program} setValue={setProgram} />
      </div>
      <ReactECharts option={options} />
    </div>
  );
};

export default CumulativeDistribution;
