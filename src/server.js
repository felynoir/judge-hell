import express from 'express';
import config, { errorHandler } from './config';
import middlewareConfig from './config/middleware';
import './config/database';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 5555;

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
config;
