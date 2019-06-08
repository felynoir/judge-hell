export default ({ Problem }) => async (req, res, next) => {
  try {
    // TODO: save problem data in mongodb
    const data = JSON.parse(req.body.data);
    const { problemName, time, memory } = data;
    const { filePdf, fileInput, fileOutput } = req.files;
    const options = {
      destination: `${problemName}/problem.pdf`,
      gzip: true,
      metadata: {
        cacheControl: 'public, max-age=31536000',
      },
    };

    await Bucket.upload(filePdf, options, async (err, file) => {
      if (err) {
        next(err);
      }
      const url = await file.getSignedUrl({
        action: 'read',
        expires: Date.now() + 1000 * 60 * 60 * 24 * 356, // 1 years
      });
      console.log(url);
      await unlinkAsync(req.file.path);

      return res.status(200).json('url');
    });
  } catch (e) {
    next(e);
  }
};
