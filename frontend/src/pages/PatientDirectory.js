import { useEffect, useState, useCallback } from "react";
import Table from "../components/Table";
import api from "../services/api";

export default function PatientDirectory() {
  const [patients, setPatients] = useState([]);
  const [date, setDate] = useState("");

  const fetchPatients = useCallback(async () => {
    try {
      const response = await api.get(
        date ? `/patients?visitDate=${date}` : "/patients"
      );
      setPatients(response.data);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  }, [date]);

  useEffect(() => {
    fetchPatients();
  }, [fetchPatients]);

  const columns = [
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    { key: "lastBMIStatus", label: "BMI Status" },
    { key: "lastAssessmentDate", label: "Last Assessment Date" },
  ];

  const formattedPatients = patients.map((patient) => ({
    ...patient,
    lastBMIStatus: patient.lastBMIStatus || "N/A",
    lastAssessmentDate: patient.lastAssessmentDate
      ? new Date(patient.lastAssessmentDate).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : "N/A",
  }));

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h2 style={{ textAlign: "center" }}>Patient Directory</h2>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          style={{ flex: 1, marginRight: "1rem" }}
        />
        <button onClick={fetchPatients}>Filter</button>
      </div>

      <Table columns={columns} data={formattedPatients} />
    </div>
  );
}