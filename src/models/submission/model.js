import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config';
import { schema } from './schema';

// Hash the user password on creation
schema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password);
  }
  return next();
});

schema.methods = {};

const User = mongoose.model('Submission', schema);

export default User;
