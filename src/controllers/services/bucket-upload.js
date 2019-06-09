import Bucket, { bucketName } from '../../config/storage';
import fs from 'fs';
import { promisify } from 'util';
const unlinkAsync = promisify(fs.unlink);
export const publicUpload = (path, options) => {
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

export const withSignedUrlUpload = (path, options, config) => {
  return new Promise((resolve, reject) => {
    Bucket.upload(path, options, async (err, file) => {
      if (err) {
        reject(err);
      }
      const [url] = await file.getSignedUrl(config);
      await unlinkAsync(path);
      resolve(url);
    });
  });
};
