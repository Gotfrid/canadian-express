export const getPassingScore = (data: Draw[] | undefined) => {
  if (!data) return undefined;
  return data[0].drawCRS;
};
