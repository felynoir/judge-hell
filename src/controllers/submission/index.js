import { Router as router } from 'express';
import passport from 'passport';
import multer from 'multer';
import submitCode from './submit-code';

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage });

const uploadCode = upload.single('code');

export default (models, config) => {
  const api = router();

  api.post(
    '/submit',
    passport.authenticate('jwt', { session: false }),
    uploadCode,
    submitCode(models),
  );

  return api;
};
