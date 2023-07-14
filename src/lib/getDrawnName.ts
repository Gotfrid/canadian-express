export const getDrawName = (data: Draw[] | undefined) => {
  if (!data) return undefined;
  return data[0].drawName;
};
