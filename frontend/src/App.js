import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientRegistration from "./pages/PatientRegistration";
import Vitals from "./pages/Vitals";
import GeneralForm from "./pages/GeneralForm";
import OverweightForm from "./pages/OverweightForm";
import PatientList from "./pages/PatientList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PatientRegistration />} />
        <Route path="/vitals" element={<Vitals />} />
        <Route path="/general" element={<GeneralForm />} />
        <Route path="/overweight" element={<OverweightForm />} />
        <Route path="/patients" element={<PatientList />} />
      </Routes>
    </Router>
  );
}

export default App;
