export const getDrawSize = (data: Draw[] | undefined) => {
  if (!data) return undefined;
  return data[0].drawSize;
};
