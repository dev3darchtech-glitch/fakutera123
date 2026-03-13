import pool from "../config/database.js";

export const getContent = async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM languages_content");
    const content = {};
    data.rows.forEach((row) => {
      content[row.key_name] = { en: row.en, sv: row.sv };
    });
    res.json(content);
  } catch (error) {
    return res.status(500).json({ errorKey: "err_server" });
  }
};
