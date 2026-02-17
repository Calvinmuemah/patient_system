import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";

export default function PatientRegistration() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/patients", form);

    navigate("/vitals", { state: { patientId: form.patientId } });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>Patient Registration</h2>

      <InputField
        label="Patient ID"
        value={form.patientId || ""}
        onChange={(e) => setForm({ ...form, patientId: e.target.value })}
        required
      />

      <InputField
        label="Registration Date"
        type="date"
        value={form.registrationDate || ""}
        onChange={(e) => setForm({ ...form, registrationDate: e.target.value })}
        required
      />

      <InputField
        label="First Name"
        value={form.firstName || ""}
        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        required
      />

      <InputField
        label="Last Name"
        value={form.lastName || ""}
        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        required
      />

      <InputField
        label="Date of Birth"
        type="date"
        value={form.dob || ""}
        onChange={(e) => setForm({ ...form, dob: e.target.value })}
        required
      />

      <SelectField
        label="Gender"
        options={["Male", "Female"]}
        value={form.gender || ""}
        onChange={(e) => setForm({ ...form, gender: e.target.value })}
        required
      />

      <button type="submit" style={{ alignSelf: "center" }}>Register</button>
    </form>
  );
}
