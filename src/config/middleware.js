import bodyParser from 'body-parser';
import morgan from 'morgan';
import passport from '../passport';
import cors from 'cors';
import kue from 'kue';

const isTest = process.env.NODE_ENV === 'test';
const isDev = process.env.NODE_ENV === 'development';

export default app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(passport.init());
  app.use(cors());
  app.use(kue.app);

  if (isDev && !isTest) {
    app.use(morgan('dev'));
  }
};
