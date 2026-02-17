import { useState } from "react";
import api from "../services/api";

export default function useApi(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (params = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(endpoint, { params });
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const postData = async (payload) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post(endpoint, payload);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData, postData };
}