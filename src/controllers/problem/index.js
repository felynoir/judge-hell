import { Router as router } from 'express';
import passport from 'passport';
import roleAuthorize from '../../utils/roleAuthorize';
import getAll from './get-all';
import newProblem from './new-problem';
import multer from 'multer';

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage });

var problemUpload = upload.fields([
  { name: 'filePdf', maxCount: 1 },
  { name: 'fileInput', maxCount: 10 },
  { name: 'fileOutput', maxCount: 10 },
]);

export default (models, config) => {
  const api = router();

  api.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    roleAuthorize('Admin'),
    getAll(models),
  );
  api.post('/upload', problemUpload, newProblem(models));

  return api;
};
