import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;
const isProduction =
  process.env.NODE_ENV === "production" || process.env.DATABASE_URL;
const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  ssl: isProduction ? { rejectUnauthorized: false } : false,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // host: process.env.DB_HOST,
  // port: process.env.DB_PORT,
  // database: process.env.DB_NAME,
});

pool.on("connect", () => {
  console.log("Connected to the PostgreSQL database");
});

pool.on("error", (error) => {
  console.error("Error connecting to the PostgreSQL database", error);
});

export default pool;
