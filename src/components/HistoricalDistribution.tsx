import type { EChartsOption } from "echarts";
import ReactECharts from "echarts-for-react";
import { DataContext } from "../containers/DataContainer";
import { useContext, useState } from "react";
import { getCleanData } from "../lib/getCleanData";
import dayjs from "dayjs";
import { useDarkMode } from "../hooks/useDarkMode";
import { Card } from "./Card";

const selectOptions: { value: DrawName; label: DrawName }[] = [
  { value: "No Program Specified", label: "No Program Specified" },
  { value: "Provincial Nominee Program", label: "Provincial Nominee Program" },
  { value: "Federal Skilled Worker", label: "Federal Skilled Worker" },
  { value: "Federal Skilled Trades", label: "Federal Skilled Trades" },
  { value: "Canadian Experience Class", label: "Canadian Experience Class" },
];

const CumulativeDistribution = ({ gridArea }: { gridArea: string }) => {
  const rawData = useContext(DataContext);
  const mode = useDarkMode();

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
    <Card gridArea={gridArea} title={null}>
      <div className="cumulative-title-container">
        <h3 className="text-xl font-semibold card-title mb-1">History of passing score</h3>
        <select
          className="select select-bordered select-sm max-w-xs mb-4"
          onChange={(e) => setProgram(e.target.value as DrawName)}
        >
          {selectOptions.map((option) => (
            <option key={option.value}>{option.value}</option>
          ))}
        </select>
      </div>
      <ReactECharts option={options} theme={mode} />
    </Card>
  );
};

export default CumulativeDistribution;
