export const getCleanData = (data: Draw[]) => {
  return data.map((draw) => ({
    date: draw.drawDate,
    score: draw.drawCRS,
    size: draw.drawSize,
    name: draw.drawName,
  }));
};
