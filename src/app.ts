import express, { Request, Response } from 'express';
const app = express();
app.get('/', (req: Request, res: Response) => {
  res.send('Hello Bi-Cycle-store-B4A2V4Bicycle server');
});
export default app;
