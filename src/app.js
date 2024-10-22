import express from 'express';
import "dotenv/config";
import productRouter from './routes/product-router.js';

const app = express();
app.use(express.json());

app.use('/product', productRouter);

app.listen(process.env.API_PORT, () => console.log('Server is running on port ' + process.env.API_PORT));