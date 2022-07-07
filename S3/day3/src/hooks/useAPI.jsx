import { useState, useEffect } from "react";

const useAPI = (apiFn) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState("");

  const executeAPI = async () => {
    try {
      setLoading(true);
      let d = await apiFn();
      setData(d);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    executeAPI();
  }, []);

  return { loading, data, error, refresh: executeAPI };
};

export default useAPI;
