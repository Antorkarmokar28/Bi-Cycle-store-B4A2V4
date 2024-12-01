import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { bicycleRoute } from './app/modules/bicycle/bicycle.route';
import { bicyclOrderRouter } from './app/modules/Order-bicycle/order-bicycle.route';
const app: Application = express();

//using parser
app.use(express.json());
app.use(cors());

// hit the application product route
app.use('/api', bicycleRoute);

//hit the application product order route
app.use('/api', bicyclOrderRouter);

// if server is running on rout then this function exicuted
app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is run',
  });
});
export default app;
