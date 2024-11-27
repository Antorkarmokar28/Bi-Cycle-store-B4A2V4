import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { bicycleRoute } from './app/modules/bicycle/bicycle.route';
const app: Application = express();

//using parser
app.use(express.json());
app.use(cors());

// hit the application route
app.use('/api', bicycleRoute);

// if server is running on rout then this function exicuted
app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is run',
  });
});
export default app;
