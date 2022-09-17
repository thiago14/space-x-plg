import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import axios from 'axios';

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
    const [data, setData] = useState<T | null>(null);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data);
            })
            .finally(() => setIsFetching(false));
    }, []);

    return { data, isFetching };
}