import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://merntalhajaved:merntalhajaved@cluster0.41feiz2.mongodb.net/ecommerce');
    console.log(`Connnected to MongoDB ${conn.connection.host}`.bgGreen.yellow);
  } catch (error) {
    console.log(`Error in DB ${error}`.bgRed.white);
  }
};

export default connectDB;
