import { Pool } from "pg";

export const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
})

const createTable = async () => {
    const queryText = `CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        city VARCHAR(100) NOT NULL,
        phone VARCHAR(100) NOT NULL
    )`;

    try {
        await pool.query(queryText);
    } catch (err) {
        console.error("Error happend while creating the table");
    }
}

createTable();