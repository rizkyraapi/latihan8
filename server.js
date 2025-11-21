import express from "express";
import productRoutes from "./routes/products.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
const port = 8001;

app.use(express.json());

// Route utama
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Route users
app.use("/api/users", userRoutes);

// Route products
app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
