import InputField from "../components/InputField";
import useForm from "../hooks/useForm";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../services/api";

export default function Vitals() {
  const navigate = useNavigate();
  const location = useLocation();
  const patientId = location.state?.patientId;

  if (!patientId) {
    alert("Patient ID is missing. Redirecting to registration.");
    navigate("/");
  }

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
    <div className="relative flex flex-col min-h-screen w-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 py-10 items-center">
      <div className="w-full max-w-4xl bg-white dark:bg-slate-900 shadow-md rounded-lg p-8">
        <div className="flex items-center justify-between mb-6">
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Visit Date"
              type="date"
              name="visitDate"
              value={form.visitDate}
              onChange={handleChange}
              required
            />
            <InputField
              label="Height (CM)"
              type="number"
              name="height"
              value={form.height}
              onChange={handleChange}
              placeholder="e.g. 175"
              required
            />
            <InputField
              label="Weight (KG)"
              type="number"
              name="weight"
              value={form.weight}
              onChange={handleChange}
              placeholder="e.g. 70"
              required
            />
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate("/patient-list")}
              className="px-6 py-3 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700"
            >
              Save Vitals
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
