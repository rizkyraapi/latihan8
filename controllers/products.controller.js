import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../models/products.model.js";

export const fetchProducts = async (req, res) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const fetchProduct = async (req, res) => {
  try {
    const product = await getProductById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createNewProduct = async (req, res) => {
  try {
    const product = await createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateProductData = async (req, res) => {
  try {
    const result = await updateProduct(req.params.id, req.body);
    res.json({ message: "Product updated", result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteProductData = async (req, res) => {
  try {
    const result = await deleteProduct(req.params.id);
    res.json({ message: "Product deleted", result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
