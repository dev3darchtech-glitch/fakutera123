import express from "express";
import dotenv from "dotenv";
import pool from "./config/database.js";
import authRoutes from "./routes/auth.route.js";
import contentRoutes from "./routes/content.route.js";
import productRoutes from "./routes/product.route.js";
import cors from "cors";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
// cors
app.use(cors());
// base route

// routes
app.use("/api/auth", authRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/product", productRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT 1");
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Database error" });
  }
});

// start the server
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
