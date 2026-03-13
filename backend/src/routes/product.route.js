import express from "express";
import {
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";
import verifyToken from "../middlewares/auth.js";
const router = express.Router();

router.get("/", verifyToken, getProducts);
router.put("/:id", verifyToken, updateProduct);
export default router;
