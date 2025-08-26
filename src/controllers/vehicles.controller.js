import { pool } from "../db.js";

export const getVehicles = async (req, res) => {
  try {
    let { page, limit } = req.query;

    page = parseInt(page) || 1;
    limit = parseInt(limit) || 20;
    const offset = (page - 1) * limit;

    const [rows] = await pool.query(
      `
        SELECT 
            Vehiculo.ID_Vehiculo AS id, 
            Vehiculo.Placa AS plate, 
            Vehiculo.Punto_Color AS color, 
            Vehiculo.Etiqueta AS label,
            Ubicacion.Latitud AS latitude, 
            Ubicacion.Longitud AS longitude
        FROM tb_Vehiculo AS Vehiculo
        INNER JOIN tb_Ubicacion_Vehiculo AS Relacion 
            ON Relacion.ID_Vehiculo = Vehiculo.ID_Vehiculo
        INNER JOIN tb_Ubicacion AS Ubicacion 
            ON Ubicacion.ID_Ubicacion = Relacion.ID_Ubicacion
        WHERE Relacion.ID_Ubicacion_Vehiculo = (
            SELECT MAX(SubRelacion.ID_Ubicacion_Vehiculo)
            FROM tb_Ubicacion_Vehiculo AS SubRelacion
            WHERE SubRelacion.ID_Vehiculo = Vehiculo.ID_Vehiculo
        )
        LIMIT ? OFFSET ?;
      `,
      [limit, offset]
    );

    const [countResult] = await pool.query(
      "SELECT COUNT(*) as total FROM tb_Vehiculo"
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
