import { fixture } from "../__test__/fixtures/drawData";
import { getCurrentDistribution } from "./getCurrentDistribution";

describe("getCurrentDistribution", () => {
  test("simple distribution", () => {
    const expected = [
      { id: "0-300", value: 5470 },
      { id: "301-350", value: 35242 },
      { id: "351-400", value: 67883 },
      { id: "401-450", value: 59827 },
      { id: "451-500", value: 55439 },
      { id: "501-600", value: 992 },
      { id: "601-1200", value: 535 },
    ];
    expect(getCurrentDistribution(fixture, "Simple")).toEqual(expected);
  });

  test("detailed distribution", () => {
    const expected = [
      { id: "0-300", value: 5470 },
      { id: "301-350", value: 35242 },
      { id: "351-400", value: 67883 },
      { id: "401-410", value: 12358 },
      { id: "411-420", value: 11527 },
      { id: "421-430", value: 10578 },
      { id: "431-440", value: 12921 },
      { id: "441-450", value: 12443 },
      { id: "451-460", value: 13366 },
      { id: "461-470", value: 16740 },
      { id: "471-480", value: 21189 },
      { id: "481-490", value: 3050 },
      { id: "491-500", value: 1094 },
      { id: "501-600", value: 992 },
      { id: "601-1200", value: 535 },
    ];
    expect(getCurrentDistribution(fixture, "Detailed")).toEqual(expected);
  });
});
