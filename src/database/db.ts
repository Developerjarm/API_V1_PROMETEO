import { Pool } from "pg";
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    user: process.env.BD_USER,
    host: process.env.BD_HOST,
    database: process.env.BD_NAME,
    password: process.env.BD_PASSWORD,
    port: Number(process.env.BD_PORT),
})


export default pool;