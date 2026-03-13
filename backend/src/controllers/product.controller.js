import pool from "../config/database.js";

export const getProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products ORDER BY id ASC");
    return res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ errorKey: "err_server" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { description, in_price, price, unit, in_stock } = req.body;
  try {
    await pool.query(
      "UPDATE products SET description=$1, in_price=$2, price=$3, unit=$4, in_stock=$5 WHERE id=$6",
      [description, in_price, price, unit, in_stock, id],
    );
    return res.status(200).json({ successKey: "success_product_updated" });
  } catch (err) {
    res.status(500).json({ errorKey: "err_server" });
  }
};
