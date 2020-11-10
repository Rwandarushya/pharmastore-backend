import express from 'express'
import cors from 'cors';
import productRoute from './routes/product.route'

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({
    message: 'Welcome to pharmastore App',
  }));

  app.use(cors());

app.use('/products', productRoute);
export default app;