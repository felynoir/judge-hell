import express from 'express';

import './config/database';

import middlewareConfig, { errorHandler } from './config/middleware';
import config from './config';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 5000;

middlewareConfig(app);

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api', routes(config));

app.use(errorHandler);

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on ${PORT}`);
  }
});

export default app;
