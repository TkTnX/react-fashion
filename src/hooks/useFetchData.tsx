import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useFetchData = (url: string) => {
  const [fetchedData, setFetchedData] = useState({
    data: [],
    isLoading: true,
    error: false,
  });

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(url);
      const data = res.data;

      if (data) {
        setFetchedData({
          data,
          isLoading: false,
          error: false,
        });
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log(`FETCHED DATA ABORTED ${error}`);
      } else {
        console.log(`error occured ${error}`);
      }
      setFetchedData({
        data: [],
        isLoading: false,
        error: true,
      });
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  const { data, isLoading, error } = fetchedData;

  return { data, isLoading, error };
};
