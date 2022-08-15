import "dotenv/config";
import express from 'express';
import appRouter from './routes';

const app = express();

app.use(express.json());
app.use(appRouter);

app.listen(process.env.PORT, () => console.log('app is running on port ' + process.env.PORT));