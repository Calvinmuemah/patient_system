import React, { useState } from "react";
import { addAssessment } from "../services/api";
import "../App.css";

const GeneralAssessment = () => {
  const [formData, setFormData] = useState({
    visitDate: "",
    clinicianName: "",
    healthStatus: "",
    drugUsage: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addAssessment(formData);
      alert("Assessment saved successfully!");
    } catch (error) {
      console.error("Error saving assessment:", error);
      alert("Failed to save assessment. Please try again.");
    }
  };

  return (
    <div className="general-assessment">
      <div className="header">
        <h2>General Assessment</h2>
        <button className="patient-records-button">Patient Records</button>
      </div>
      <form onSubmit={handleSubmit} className="assessment-container">
        <div className="section">
          <h3>Visit Details</h3>
          <label>
            Visit Date
            <input
              type="date"
              name="visitDate"
              className="input-field"
              value={formData.visitDate}
              onChange={handleChange}
            />
          </label>
          <label>
            Clinician Name
            <input
              type="text"
              name="clinicianName"
              className="input-field"
              value={formData.clinicianName}
              onChange={handleChange}
              placeholder="Dr. Sarah Jenkins"
            />
          </label>
        </div>

        <div className="section">
          <h3>Patient Status</h3>
          <label>
            How would you describe the patient's general health?
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="healthStatus"
                  value="Good"
                  checked={formData.healthStatus === "Good"}
                  onChange={handleChange}
                />
                Good
              </label>
              <label>
                <input
                  type="radio"
                  name="healthStatus"
                  value="Poor"
                  checked={formData.healthStatus === "Poor"}
                  onChange={handleChange}
                />
                Poor
              </label>
            </div>
          </label>
          <label>
            Is the patient currently using any drugs (prescription or recreational)?
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="drugUsage"
                  value="Yes"
                  checked={formData.drugUsage === "Yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="drugUsage"
                  value="No"
                  checked={formData.drugUsage === "No"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </label>
        </div>

        <div className="section">
          <h3>Clinical Observations</h3>
          <label>
            Comments & Additional Notes
            <textarea
              name="comments"
              className="textarea-field"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Enter detailed assessment notes, observations, or follow-up recommendations here..."
            ></textarea>
          </label>
        </div>

        <div className="button-group">
          <button type="button" className="save-draft-button">
            Save Draft
          </button>
          <button type="submit" className="save-finish-button">
            Save and Finish
          </button>
        </div>
      </form>
    </div>
  );
};

export default GeneralAssessment;