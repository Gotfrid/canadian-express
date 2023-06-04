import { useState } from "react";

export const useDrawData = () => {
  const [data, setData] = useState();
  fetch(import.meta.env.PUBLIC_DATA_URL)
    .then((res) => res.json())
    .then((data) => setData(data.rounds))
    .catch(console.error);
  return data;
};
