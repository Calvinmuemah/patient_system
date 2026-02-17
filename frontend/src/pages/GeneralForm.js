import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import useForm from "../hooks/useForm";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../services/api";

export default function GeneralForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const patientId = location.state?.patientId;

  const [form, handleChange] = useForm({ visitDate: "", generalHealth: "", usingDrugs: "", comments: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/assessments", {
      ...form,
      patientId,
      type: "general",
    });

    navigate("/patients");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>General Assessment</h2>

      <InputField
        label="Visit Date"
        type="date"
        name="visitDate"
        value={form.visitDate}
        onChange={handleChange}
        required
      />

      <SelectField
        label="General Health"
        name="generalHealth"
        options={["Good", "Poor"]}
        value={form.generalHealth}
        onChange={handleChange}
        required
      />

      <SelectField
        label="Are you currently using any drugs"
        name="usingDrugs"
        options={["Yes", "No"]}
        value={form.usingDrugs}
        onChange={handleChange}
        required
      />

      <InputField
        label="Comments"
        name="comments"
        value={form.comments}
        onChange={handleChange}
        required
      />

      <button type="submit" style={{ alignSelf: "center" }}>Submit</button>
    </form>
  );
}
