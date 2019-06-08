import Bucket from '../../config/storage';
import fs from 'fs';
import { promisify } from 'util';
const unlinkAsync = promisify(fs.unlink);
const BucketUpload = () => {
  Bucket.upload(filePdf, options, async (err, file) => {
    if (err) {
      next(err);
    }
    const url = await file.getSignedUrl({
      action: 'read',
      expires: Date.now() + 1000 * 60 * 60 * 24 * 356, // 1 years
    });
    console.log(url);
    await unlinkAsync(req.file.path);
    return url;
  });
};
