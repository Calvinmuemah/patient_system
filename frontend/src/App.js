import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PatientRegistration from "./pages/PatientRegistration";
import Vitals from "./pages/Vitals";
import GeneralForm from "./pages/GeneralForm";
import OverweightForm from "./pages/OverweightForm";
import PatientList from "./pages/PatientList";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Patient Management System</h1>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/vitals">Vitals</Link>
            <Link to="/general">General Form</Link>
            <Link to="/overweight">Overweight Form</Link>
            <Link to="/patients">Patient List</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<PatientRegistration />} />
          <Route path="/vitals" element={<Vitals />} />
          <Route path="/general" element={<GeneralForm />} />
          <Route path="/overweight" element={<OverweightForm />} />
          <Route path="/patients" element={<PatientList />} />
        </Routes>
        <footer>
          <p>&copy; 2026 Patient Management System</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
