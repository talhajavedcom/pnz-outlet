import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./database/db.js";
import authRoutes from "./routes/authRoute.js";

import cors from "cors";
import categoryRoute from "./routes/categoryRoute.js"
import productRoutes from "./routes/productRoutes.js"
import userModel from "./models/userModel.js";

// Rest object
const app = express();
// config env
dotenv.config();
// clear cors
app.use(cors());
// database config
connectDB();
// Middlewar
app.use(express.json());
app.use(morgan("dev"));

//Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoutes);



















// -------------------------------------------------------------------------------------------
// GET getting data from mongo                                      Get
// -------------------------------------------------------------------------------------------
app.get("/userss", async (req, res) => {
  const document = await userModel.find();
  res.send(document)
 
});
app.delete("/deleteuser/:id", async (req, res) => {
  const id = req.params.id;
  const check =  userModel.findById(id);
  if (!check) {
    res.send({ message: "User Not Found" });
  } else {
    await userModel.findByIdAndDelete(id);
    res.send({ message: "User Deletted" });
  }
});




// Port
const PORT = process.env.PORT || 8080;
// Run Server
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} Mode using ${PORT} Port`.bgYellow
      .white
  );
});
