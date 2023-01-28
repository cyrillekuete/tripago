import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (error) {
        setError("Could not fetch data");
      }
    };
    fetchData();
  }, [url]);
  return {
    data,
      isPending,
    error
  };
};

export default useFetch;
