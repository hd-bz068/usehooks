import { useState, useEffect } from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    try {
      fetch(url, options)
        .then((response) => response.json())
        .then((responseData) => {
          if (isMounted) {
            setData(responseData);
            setError(null);
          }
        });
    } catch (err) {
      if (isMounted) {
        setError(err);
        setData(null);
      }
    } finally {
      if (isMounted) {
        setLoading(false);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [url, options]);

  return [data, error, loading];
};

export default useFetch;
