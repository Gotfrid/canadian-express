import { useEffect, useState } from "react";

export const useDrawData = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const abortController = new AbortController();
    fetch(import.meta.env.PUBLIC_DATA_URL, { signal: abortController.signal })
      .then((res) => res.json())
      .then((data) => setData(data.rounds))
      .catch(console.error);
    return () => abortController.abort();
  }, []);
  return data;
};
