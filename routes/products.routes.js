import express from "express";
import {
  fetchProducts,
  fetchProduct,
  createNewProduct,
  updateProductData,
  deleteProductData,
} from "../controllers/products.controller.js";

import { authBearer } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Public route
router.get("/", fetchProducts);
router.get("/:id", fetchProduct);

// Protected Route
router.post("/", authBearer, createNewProduct);
router.put("/:id", authBearer, updateProductData);
router.delete("/:id", authBearer, deleteProductData);

export default router;
