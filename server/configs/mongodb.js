import mongoose from "mongoose";

// connect to mongodb database

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB database connected successfully");
  });

  await mongoose.connect(`${process.env.MONGODB_URI}/skillspring`);
};

export default connectDB;