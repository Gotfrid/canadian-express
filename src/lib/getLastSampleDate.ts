import dayjs from "dayjs";
import minMax from "dayjs/plugin/minMax";

dayjs.extend(minMax);

export const getLastSampleDate = (data: Draw[]) => {
  const allDates = data.map((draw) => dayjs(draw.drawDate));
  return dayjs.max(allDates).format("DD MMM YY");
};
