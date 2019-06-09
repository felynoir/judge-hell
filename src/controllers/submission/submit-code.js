import { createSubmission } from '../services/submission-queue';
import { withSignedUrlUpload } from '../services/bucket-upload';
export default ({ Submission, Problem }) => async (req, res, next) => {
  try {
    const { path, originalname } = req.file;
    const { _id: userId } = req.user.user;
    const { problemId } = req.body;

    const { input, output } = await Problem.findOne({ _id: problemId });

    const submissions = await Submission.find();

    const length = submissions ? submissions.length : 0;

    const url = await withSignedUrlUpload(
      path,
      {
        destination: `users/${userId}/${length}${
          originalname.match(/\.[0-9a-z]+$/i)[0]
        }`,
        gzip: true,
        metadata: {
          cacheControl: 'public, max-age=31536000',
        },
      },
      {
        action: 'read',
        expires: '03-17-2025',
      },
    );

    createSubmission(url, input, output, err => {
      if (err) {
        next(err);
      } else {
        return res.status(200).json('submit success');
      }
    });
  } catch (e) {
    next(e);
  }
};
