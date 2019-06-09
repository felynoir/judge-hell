import Bucket from '../../config/storage';
import fs from 'fs';
import { promisify } from 'util';
const unlinkAsync = promisify(fs.unlink);
export default (path, options) => {
  return new Promise((resolve, reject) => {
    Bucket.upload(path, options, async (err, file) => {
      if (err) {
        reject(err);
      }
      const url = await file.getSignedUrl({
        action: 'read',
        expires: Date.now() + 1000 * 60 * 60 * 24 * 356, // 1 years
      });
      await unlinkAsync(path);
      resolve(url);
    });
  });
};
