import Vitals from "../models/vitals.js";

//add vitals
export const addVitals = async (req, res) => {
  try {
    const { patientId, visitDate, height, weight } = req.body;

    //bmi calculation
    const bmi = weight / Math.pow(height / 100, 2);

    const vitals = await Vitals.create({
      patientId,
      visitDate,
      height,
      weight,
      bmi,
    });

    res.status(201).json({
      message: "Vitals saved",
      bmi,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
