import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function PatientRegistration() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/patients", form);

    if (form.patientId) {
      navigate("/vitals", { state: { patientId: form.patientId } });
    } else {
      alert("Patient ID is required to proceed.");
    }
  };

  const handleDiscard = () => {
    setForm({});
  };

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 lg:px-12 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">PatientCare</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
            <div className="flex items-center gap-3 pl-2">
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Patient Registration</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Complete the information below to create a new clinical patient record.</p>
          </div>

          {/* Registration Form Card */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-6 sm:p-8">
              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* ID and Date Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                      Patient ID <span className="text-primary font-bold">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 pointer-events-none">
                        <span className="material-symbols-outlined text-sm"></span>
                      </span>
                      <input
                        className="w-full pl-9 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 dark:text-slate-400 font-mono text-sm focus:outline-none"
                        name="patientId"
                        type="text"
                        value={form.patientId || ""}
                        onChange={(e) => setForm({ ...form, patientId: e.target.value })}
                      />
                    </div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">System generated unique identifier</p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                      Registration Date
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400 pointer-events-none">
                        <span className="material-symbols-outlined text-sm"></span>
                      </span>
                      <input
                        className="w-full pl-9 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 dark:text-slate-400 text-sm focus:outline-none"
                        type="date"
                        value={form.registrationDate || ""}
                        onChange={(e) => setForm({ ...form, registrationDate: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>

                <hr className="border-slate-100 dark:border-slate-800" />

                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">First Name</label>
                      <input
                        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        type="text"
                        value={form.firstName || ""}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Last Name</label>
                      <input
                        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        type="text"
                        value={form.lastName || ""}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Date of Birth</label>
                      <input
                        className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        type="date"
                        value={form.dob || ""}
                        onChange={(e) => setForm({ ...form, dob: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Gender</label>
                      <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        <label className="flex-1 relative cursor-pointer group">
                          <input
                            className="peer sr-only"
                            name="gender"
                            type="radio"
                            value="Male"
                            checked={form.gender === "Male"}
                            onChange={(e) => setForm({ ...form, gender: e.target.value })}
                          />
                          <div className="py-2.5 text-center text-sm font-medium rounded-md transition-all peer-checked:bg-white peer-checked:text-primary peer-checked:shadow-sm dark:peer-checked:bg-slate-700 text-slate-500 dark:text-slate-400">
                            Male
                          </div>
                        </label>
                        <label className="flex-1 relative cursor-pointer group">
                          <input
                            className="peer sr-only"
                            name="gender"
                            type="radio"
                            value="Female"
                            checked={form.gender === "Female"}
                            onChange={(e) => setForm({ ...form, gender: e.target.value })}
                          />
                          <div className="py-2.5 text-center text-sm font-medium rounded-md transition-all peer-checked:bg-white peer-checked:text-primary peer-checked:shadow-sm dark:peer-checked:bg-slate-700 text-slate-500 dark:text-slate-400">
                            Female
                          </div>
                        </label>
                        <label className="flex-1 relative cursor-pointer group">
                          <input
                            className="peer sr-only"
                            name="gender"
                            type="radio"
                            value="Other"
                            checked={form.gender === "Other"}
                            onChange={(e) => setForm({ ...form, gender: e.target.value })}
                          />
                          <div className="py-2.5 text-center text-sm font-medium rounded-md transition-all peer-checked:bg-white peer-checked:text-primary peer-checked:shadow-sm dark:peer-checked:bg-slate-700 text-slate-500 dark:text-slate-400">
                            Other
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleDiscard}
                    className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    Discard Changes
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
                  >
                    Save and Continue to Vitals
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
