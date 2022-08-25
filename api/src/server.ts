import { config as initDotEnv } from 'dotenv';
import express, {
  NextFunction,
  Request,
  Response,
} from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import helmet from 'helmet';
import path from 'path';

initDotEnv();

import config from './config';

const app = express();

app.use(json());
app.use(cors());
// app.use(helmet())

app.use((req: Request, _: Response, next: NextFunction) => {
  console.log(req.method, req.url, '| BODY', req.body);
  next();
});

app.use('/public', express.static(path.resolve(__dirname, '..', '..', 'public')));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'));
});

app.listen(config.port, () => {
  console.log(`Server is listenning on port ${config.port}`);
});
