import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config';
import { schema } from './schema';

// Hash the user password on creation
schema.pre('save', function(next) {});

schema.methods = {};

const User = mongoose.model('Submission', schema);

export default User;
