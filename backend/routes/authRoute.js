import express from "express";
import {
  registerController,
  loginController,
  testController,} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//  Router Object
const router = express.Router();



//////////// Routing ///////////////

// register || post method
router.post("/signup", registerController);
// Login ||  method post
router.post("/login", loginController);
// test route
router.get("/test", requireSignIn,isAdmin, testController);




export default router;
