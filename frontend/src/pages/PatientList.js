import { useEffect, useState, useCallback } from "react";
import Table from "../components/Table";
import api from "../services/api";

export default function PatientList() {
  const [patients, setPatients] = useState([]);
  const [date, setDate] = useState("");

  const fetchPatients = useCallback(async () => {
    const response = await api.get(
      date ? `/patients?visitDate=${date}` : "/patients"
    );
    setPatients(response.data);
  }, [date]);

  useEffect(() => {
    fetchPatients();
  }, [fetchPatients]);

  const columns = [
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    { key: "bmiStatus", label: "Last BMI Status" },
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h2 style={{ textAlign: "center" }}>Patient List</h2>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          style={{ flex: 1, marginRight: "1rem" }}
        />
        <button onClick={fetchPatients}>Filter</button>
      </div>

      <Table columns={columns} data={patients} />
    </div>
  );
}
