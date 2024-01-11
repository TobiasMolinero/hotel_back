import { config } from "dotenv";

config() // NOS PERMITE LEER VARIABLES DE ENTORNO

export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "12345";
export const DB_DATABASE = process.env.DB_DATABASE || "db_hotel";
export const DB_PORT = process.env.DB_PORT || 3306;