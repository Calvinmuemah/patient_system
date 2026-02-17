import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import useForm from "../hooks/useForm";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../services/api";

export default function OverweightForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const patientId = location.state?.patientId;

  const [form, handleChange] = useForm({
    visitDate: "",
    generalHealth: "",
    dietedBefore: "",
    comments: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/assessments", {
      patientId,
      visitDate: form.visitDate,
      type: "overweight",
      generalHealth: form.generalHealth,
      dietedBefore: form.dietedBefore === "Yes",
      comments: form.comments,
    });

    navigate("/patients");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>Overweight Assessment</h2>

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
        label="Dieted Before"
        name="dietedBefore"
        options={["Yes", "No"]}
        value={form.dietedBefore}
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
