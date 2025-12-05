const Product = require('../models/products.model');

// GET ALL
exports.getAllProducts = (req, res) => {
    Product.getAll((err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

// GET BY ID
exports.getProductById = (req, res) => {
    const id = req.params.id;
    Product.getById(id, (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0) return res.status(404).json({ message: "Product not found" });
        res.json(results[0]);
    });
};

// CREATE
exports.createProduct = (req, res) => {
    const data = req.body;
    Product.create(data, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ message: "Product created", id: result.insertId, data });
    });
};

// UPDATE
exports.updateProduct = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Product.update(id, data, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Product updated" });
    });
};

// DELETE
exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    Product.delete(id, (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "Product deleted" });
    });
};
