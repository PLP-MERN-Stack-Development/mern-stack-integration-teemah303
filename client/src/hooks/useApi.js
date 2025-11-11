import { useState, useEffect } from 'react';
import api from '../services/api';

export default function useApi(endpoint, options = {}) {
  const [data, setData] = useState(options.initial || null);
  const [loading, setLoading] = useState(Boolean(options.auto ?? true));
  const [error, setError] = useState(null);

  const fetchData = async (params) => {
    setLoading(true);
    try {
      const res = await api.get(endpoint, { params });
      setData(res.data);
    } catch (err) {
      setError(err.response?.data || err.message);
    } finally { setLoading(false); }
  };

  useEffect(() => {
    if (options.auto ?? true) fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData, setData };
}
