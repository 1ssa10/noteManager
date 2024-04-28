import mongoose from "mongoose";

const connectMongoDB = async () => {
  const url = process.env.MONGODB_URI as string;
  console.log(process.env);
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB ");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
