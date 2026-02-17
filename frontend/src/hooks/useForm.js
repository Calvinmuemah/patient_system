import { useState } from "react";

export default function useForm(initialState = {}) {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return [form, handleChange, setForm];
}