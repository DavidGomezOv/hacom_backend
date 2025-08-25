import { pool } from "../db.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { phone, account } = req.body;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM tb_Usuario WHERE Telefono = ? AND Nombre_Usuario = ?",
      [phone, account]
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = rows[0];

    const token = jwt.sign(
      { id: user.id, phone: user.phone },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
