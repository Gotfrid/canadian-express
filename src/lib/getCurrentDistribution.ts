const mapping = {
  dd1: "601-1200",
  dd2: "501-600",
  dd3: "451-500",
  dd4: "491-500",
  dd5: "481-490",
  dd6: "471-480",
  dd7: "461-470",
  dd8: "451-460",
  dd9: "401-450",
  dd10: "441-450",
  dd11: "431-440",
  dd12: "421-430",
  dd13: "411-420",
  dd14: "401-410",
  dd15: "351-400",
  dd16: "301-350",
  dd17: "0-300",
  dd18: "Total",
};

export const getCurrentDistribution = (data: Draw[], mode: "Simple" | "Detailed") => {
  let bracketKeys: string[];

  if (mode === "Simple") {
    bracketKeys = ["dd17", "dd16", "dd15", "dd9", "dd3", "dd2", "dd1"];
  } else {
    // prettier-ignore
    bracketKeys = [
      "dd17", "dd16", "dd15",
      "dd14", "dd13", "dd12",
      "dd11", "dd10", "dd8",
      "dd7",  "dd6",  "dd5",
      "dd4",  "dd2",  "dd1",
    ];
  }

  return bracketKeys.map((key) => ({
    id: mapping[key as keyof typeof mapping],
    value: +data[0][key as keyof Draw].replace(/,/g, ""),
  }));
};
