import express from 'express'
import cors from 'cors';
import productRoute from './routes/product.route'
import listRoute from './routes/list.route'

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({
    message: 'Welcome to pharmastore App',
  }));

  app.use(cors());

app.use('/products', productRoute);
app.use('/list', listRoute)
export default app;