import InputField from "../components/InputField";
import useForm from "../hooks/useForm";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../services/api";

export default function Vitals() {
  const navigate = useNavigate();
  const location = useLocation();
  const patientId = location.state?.patientId;

  const [form, handleChange] = useForm({ visitDate: "", height: "", weight: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await api.post("/vitals", {
      ...form,
      patientId,
    });

    const bmi = response.data.bmi;

    if (bmi <= 25) {
      navigate("/general", { state: { patientId } });
    } else {
      navigate("/overweight", { state: { patientId } });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>Vitals</h2>

      <InputField
        label="Visit Date"
        type="date"
        name="visitDate"
        value={form.visitDate}
        onChange={handleChange}
        required
      />

      <InputField
        label="Height (cm)"
        type="number"
        name="height"
        value={form.height}
        onChange={handleChange}
        required
      />

      <InputField
        label="Weight (kg)"
        type="number"
        name="weight"
        value={form.weight}
        onChange={handleChange}
        required
      />

      <button type="submit" style={{ alignSelf: "center" }}>Submit</button>
    </form>
  );
}
