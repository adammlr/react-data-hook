import { useEffect, useState } from 'react';

export default function useLoadData<T>(url: string) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        setData(data);
        setLoading(false);
      } catch (e: any) {
        setLoading(false);
        setError(e.message);
      }
    }

    if (!data) {
      getData();
    }
  }, [data, url]);

  return { data, loading, error };
}
