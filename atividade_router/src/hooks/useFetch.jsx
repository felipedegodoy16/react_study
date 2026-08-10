import React from "react";

const useFetch = ({ url, id }) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(url + (id ? `${id}` : ""));
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados");
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id, url]);

  return { data, loading, error };
};

export default useFetch;
