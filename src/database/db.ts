import { Pool } from "pg";
import 'dotenv/config';

export const pool = new Pool({
  host: process.env.HOST || "localhost",
  port: +(process.env.PORT || 5432),
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

async function checkDatabaseConnection() {
  try {
    const client = await pool.connect();
    console.log("Conexión a la base de datos establecida correctamente");
    client.release(); // Liberar el cliente después de la validación
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}

checkDatabaseConnection();

