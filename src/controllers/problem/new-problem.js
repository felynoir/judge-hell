import Bucket from '../../config/storage';

export default ({ Problem }) => async (req, res, next) => {
  try {
    // TODO: save problem data in mongodb
    console.log(req.file);

    // Uploads a local file to the bucket
    await Bucket.upload(req.file.path, {
      // Support for HTTP requests made with `Accept-Encoding: gzip`
      gzip: true,
      // By setting the option `destination`, you can change the name of the
      // object you are uploading to a bucket.
      metadata: {
        // Enable long-lived HTTP caching headers
        // Use only if the contents of the file will never change
        // (If the contents will change, use cacheControl: 'no-cache')
        cacheControl: 'public, max-age=31536000',
      },
    });

    // console.log(`${filename} uploaded to ${bucketName}.`);

    return res.status(200).json('problem');
  } catch (e) {
    next(e);
  }
};
