import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('');
    console.log(`Connnected to MongoDB ${conn.connection.host}`.bgGreen.yellow);
  } catch (error) {
    console.log(`Error in DB ${error}`.bgRed.white);
  }
};

export default connectDB;
