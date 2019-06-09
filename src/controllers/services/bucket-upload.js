import Bucket, { bucketName } from '../../config/storage';
import fs from 'fs';
import { promisify } from 'util';
const unlinkAsync = promisify(fs.unlink);
export default (path, options) => {
  return new Promise((resolve, reject) => {
    Bucket.upload(path, options, async (err, file) => {
      if (err) {
        reject(err);
      }
      await file.makePublic();
      await unlinkAsync(path);
      resolve(
        `http://storage.googleapis.com/${bucketName}/${options.destination}`,
      );
    });
  });
};
