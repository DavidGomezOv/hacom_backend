import { pool } from "../db.js";

export const getPlaces = async (req, res) => {
  try {
    let { page, limit } = req.query;

    page = parseInt(page) || 1;
    limit = parseInt(limit) || 20;

    const offset = (page - 1) * limit;

    const [rows] = await pool.query(
      `
        SELECT 
          ID_Lugar AS id,
          Nombre AS name,
          Descripcion AS description,
          Telefono AS phone,
          Latitud AS latitude,
          Longitud AS longitude
        FROM tb_Lugar
        LIMIT ? OFFSET ?
      `,
      [limit, offset]
    );

    const [countResult] = await pool.query(
      "SELECT COUNT(*) as total FROM tb_Lugar"
    );
    const total = countResult[0].total;

    res.json({
      page,
      total,
      totalPages: Math.ceil(total / limit),
      data: rows
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
