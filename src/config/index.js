if (process.env.NODE_ENV !== 'production') require('dotenv').config();

import errorHandler from './error-handler';
import config from './config';

export { errorHandler };

export default config;
