import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/routes';
import globalErrorHandeling from './app/middlewares/globalErrorHandeling';
import notFound from './app/middlewares/notFound';
import cookieParser from 'cookie-parser';

const app: Application = express();
//using parser
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5000/'] }));
// hit the application route
app.use('/api', router);
// if server is running on rout then this function exicuted
app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is run',
  });
});
// global error handeler
app.use(globalErrorHandeling);
// not found router handeler
app.use(notFound);
export default app;
