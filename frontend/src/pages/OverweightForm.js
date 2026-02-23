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
    <div className="relative flex flex-col min-h-screen w-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 py-10 items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 max-w-2xl bg-white dark:bg-slate-900 shadow-md rounded-lg p-8 text-slate-900 dark:text-slate-100"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Overweight Assessment
        </h2>

        <InputField
          label="Visit Date"
          type="date"
          name="visitDate"
          value={form.visitDate}
          onChange={handleChange}
          className="bg-slate-50 dark:bg-slate-800 text-black"
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

        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
          Have you ever been on a diet to lose weight?
        </h3>

        <div className="flex justify-between">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="dietedBefore"
              value="Yes"
              checked={form.dietedBefore === "Yes"}
              onChange={handleChange}
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="dietedBefore"
              value="No"
              checked={form.dietedBefore === "No"}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        <InputField
          label="Comments"
          name="comments"
          value={form.comments}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 self-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
