import express from 'express';

import './config/database';

import middlewareConfig from './config/middleware';
import config from './config';
import routes from './routes';

const app = express();

middlewareConfig(app);

app.use('/api', routes(config));

app.listen(8009, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on ${8009}`);
  }
});

export default app;
