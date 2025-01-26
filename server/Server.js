import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { pool } from './db.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/register', async (req, res) => {
    const { firstName, lastName, email, city, phone } = req.body;
    console.log(req.body);
    try {
        const result = await pool.query(
            'INSERT INTO users (first_name, last_name, email, city, phone) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [firstName, lastName, email, city, phone]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("Error happened:", err);
        res.status(500).json({ error: 'Registration failed' });
    }
});

app.listen(4545, () => {
    console.log('Server is running on port 4545');
});