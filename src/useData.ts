import { useEffect, useState } from 'react';

export default function useLoadData<T>(url: string) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    if (url) {
      getData();
    } else {
      setError('Data url not specified');
    }
  }, [url]);

  return { data, loading, error };
}
