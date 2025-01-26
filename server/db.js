import pg from 'pg';
const { Pool } = pg;

export const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432'), 
});

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
        console.log('Table "users" created or already exists.');
    } catch (err) {
        console.error("Error happened while creating the table:", err);
    }
};

createTable();