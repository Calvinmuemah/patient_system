import mongoose from "mongoose";

const connectDB = async () => {
  // const MONGO_URI = process.env.MONGO_URI;
  const MONGO_URI = "mongodb+srv://kelvinmuemah855:kelvinmuemah855@cluster0.wzdrk.mongodb.net/Patient_system"
  if (!MONGO_URI) {
    throw new Error("Please define MONGO_URI");
  }

  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;