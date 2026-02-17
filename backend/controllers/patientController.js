import Patient from "../models/patient.js";
import Vitals from "../models/vitals.js";

//bmi status
export const getBMIStatus = (bmi) => {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  return "Overweight";
};

export const registerPatient = async (req, res) => {
  try {
    const { patientId, registrationDate, firstName, lastName, dob, gender } =
      req.body;

    const existing = await Patient.findOne({ patientId });
    if (existing) {
      return res.status(409).json({ message: "Patient already exists" });
    }

    const patient = await Patient.create({
      patientId,
      registrationDate,
      firstName,
      lastName,
      dob,
      gender,
    });

    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPatients = async (req, res) => {
  try {
    const { visitDate } = req.query;

    const patients = await Patient.find();

    const result = [];

    for (let patient of patients) {
      let vitalsQuery = { patientId: patient.patientId };

      const startOfDay = new Date(visitDate);
      startOfDay.setHours(0, 0, 0, 0);

      const endOfDay = new Date(visitDate);
      endOfDay.setHours(23, 59, 59, 999);

      if (visitDate) {
        vitalsQuery.visitDate = { $gte: startOfDay, $lte: endOfDay };
      }

      const lastVital = await Vitals.findOne(vitalsQuery).sort({
        visitDate: -1,
      });

      let bmiStatus = "No Records";

      if (lastVital) {
        bmiStatus = getBMIStatus(lastVital.bmi);
      }

      const age =
        new Date().getFullYear() - new Date(patient.dob).getFullYear();

      result.push({
        patientId: patient.patientId,
        name: `${patient.firstName} ${patient.lastName}`,
        age,
        lastBMIStatus: bmiStatus,
      });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
