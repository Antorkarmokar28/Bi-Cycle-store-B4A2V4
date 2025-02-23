import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/routes';

const app: Application = express();

//using parser
app.use(express.json());
app.use(cors());

// hit the application product route
app.use('/api', router);

// if server is running on rout then this function exicuted
app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is run',
  });
});
export default app;
