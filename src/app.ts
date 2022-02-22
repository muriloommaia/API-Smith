import express, { Request, Response } from 'express';
import db from './db/connection';
import { IUser } from './interfaces/IUser';

const app = express();
app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  const allItems:IUser[] = await db.select('*').from('Users');
  console.log(allItems);
  res.status(200).json(allItems);
});

export default app;
