import { useEffect, useState } from 'react';
import { Data, FetchOptions } from 'utils/types';

const useFetch = (
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET'
) => {
  const [data, setData] = useState<(Data[] & Data) | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [options, setOptions] = useState<FetchOptions | null>(null);

  const postData = (data: Data) => {
    setOptions({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  };

  const deleteData = () => {
    setOptions({ method: 'DELETE' });
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async (fetchOptions?: FetchOptions) => {
      setIsPending(true);

      try {
        const res = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();

        setIsPending(false);
        setData(data);
        setError(null);
      } catch (err: any) {
        if (err.name === 'AbortError') {
          console.error('the fetch was aborted');
        } else {
          setIsPending(false);
          setError('Could not fetch the data');
        }
      }
    };

    if (method === 'GET') {
      fetchData();
    }

    if (options) {
      fetchData(options);
    }

    return () => {
      controller.abort();
    };
  }, [url, options, method]);

  return { data, isPending, error, postData, deleteData };
};

export default useFetch;
