import { useState, useEffect } from "react";

const CLIENT_ID = import.meta.env.VITE_TWITCH_CLIENT_ID;

export const useFetch = (url, accessToken) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Client-Id": CLIENT_ID,
            "Content-Type": "application/json",
          },
        });
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    url && accessToken && fetchData();
  }, [url, accessToken]);

  return { response, error, isLoading };
};
