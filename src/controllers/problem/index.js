import { Router as router } from 'express';
import passport from 'passport';
import roleAuthorize from '../../utils/roleAuthorize';
import getAll from './get-all';
import newProblem from './new-problem';
// import multer from 'multer';

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });
// var upload = multer({ storage });

export default (models, config) => {
  const api = router();

  api.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    roleAuthorize('Admin'),
    getAll(models),
  );

  //api.post('/upload', upload.single('problemFile'), newProblem(models));

  return api;
};
