import express from 'express';
import 'express-async-errors';
import router from './routes';
import errorMiddleware from './middleware/error';

const app = express();
app.use(express.json());
app.use(router);
app.use(errorMiddleware);

export default app;
