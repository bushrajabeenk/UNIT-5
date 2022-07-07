import { useEffect, useState } from "react";
import { User } from "../App";
import axios from "axios";

export const useFetch = (url: string, params: object) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url, {
        params: {
          ...params,
        },
      })
      .then(({ data }) => {
        setLoading(false);
        setData(data.items);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return { loading, data, error };
};
