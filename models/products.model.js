import db from "../config/db.js";

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM products", (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM products WHERE id = ?", [id], (err, results) => {
      if (err) reject(err);
      resolve(results[0]);
    });
  });
};

export const createProduct = (product) => {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO products SET ?", product, (err, results) => {
      if (err) reject(err);
      resolve({ id: results.insertId, ...product });
    });
  });
};

export const updateProduct = (id, product) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE products SET ? WHERE id = ?",
      [product, id],
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};

export const deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    db.query("DELETE FROM products WHERE id = ?", [id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};
