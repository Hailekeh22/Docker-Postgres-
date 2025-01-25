import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.post('/register', (req,res) => {
    console.log(req.body)
})

app.listen(4545, () => {
    console.log('Server is running on port 4545')
})