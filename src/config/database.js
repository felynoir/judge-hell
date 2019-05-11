import mongoose from 'mongoose';
import config from './config';

try {
  mongoose.connect(config.MONGO_URL);
} catch (err) {
  mongoose.createConnection(config.MONGO_URL);
}

mongoose.connection
  .once('open', () => console.log('MongoDB Running'))
  .on('error', e => {
    throw e;
  });
