import Assessment from "../models/Assessment.js";

//save assessments
export const addAssessment = async (req, res) => {
  try {
    const {
      patientId,
      visitDate,
      type,
      generalHealth,
      dietedBefore,
      usingDrugs,
      comments,
    } = req.body;

    const assessment = await Assessment.create({
      patientId,
      visitDate,
      type,
      generalHealth,
      dietedBefore,
      usingDrugs,
      comments,
    });

    res.status(201).json({
      message: "Assessment saved",
      assessment,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
