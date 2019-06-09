import bucketUpload from '../services/bucket-upload';
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

    const problemUrl = await bucketUpload(filePdf[0].path, options);

    const inputUrl = await Promise.all(
      fileInput.map(file => {
        const options = {
          destination: `${problemName}/${file.originalname}`,
          gzip: true,
          metadata: {
            cacheControl: 'public, max-age=31536000',
          },
        };
        return bucketUpload(file.path, options);
      }),
    );

    const outputUrl = await Promise.all(
      fileOutput.map(file => {
        const options = {
          destination: `${problemName}/${file.originalname}`,
          gzip: true,
          metadata: {
            cacheControl: 'public, max-age=31536000',
          },
        };
        return bucketUpload(file.path, options);
      }),
    );

    console.log(problemUrl);
    console.log(inputUrl);
    console.log(outputUrl);
    return res.status(200).json('problem');
  } catch (e) {
    next(e);
  }
};
