import { useEffect, useState } from 'react';

export default function useLoadComments<T>(url: string) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      //const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setData(data);
      setLoading(false);
    }

    if (!data) {
      getData();
    }
  }, [data, url]);

  return { data, loading };
}
