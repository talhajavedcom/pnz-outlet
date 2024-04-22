import express from "express";
import { createCategoryController , getCategoryController ,updateCategoryController,deleteCategoryController } from "../controllers/categoryController.js";

//  Router Object
const router = express.Router();



//////////// Routing ///////////////

router.post("/add",createCategoryController)
router.get("/all",getCategoryController)
router.put("/update/:id",updateCategoryController)
router.delete("/delete/:id",deleteCategoryController)




export default router;
 