import { useState, useEffect } from "react";
import axios from "axios";
import { User } from "../App";

const useFetch = (url: string, params: Record<string, unknown>) => {
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(false);
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url, {
        params: {
          ...params,
        },
      })
      .then((res) => {
        setLoading(false);
        setError(false);
        setData(res.data.items);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        console.log(err);
      });
  }, [params.q]);

  return { loading, data, err };
};

export default useFetch;
