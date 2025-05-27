import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from './src/config/database.js';

const app = express();

dotenv.config();

const PORT = 3000 || process.env.PORT;

app.get('/', (req, res) =>{
    res.send(`API is running..`)
})

app.listen(PORT, () => {
    console.log(`server running on port number ${PORT}`);
    connectDB();
});