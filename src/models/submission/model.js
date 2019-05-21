import mongoose from 'mongoose';
import { schema } from './schema';

// Hash the user password on creation
schema.pre('save', function(next) {});

schema.methods = {};

const User = mongoose.model('Submission', schema);

export default User;
