import mongoose from 'mongoose';
import config from '../../config';
import { schema } from './schema';

// Hash the user password on creation
// schema.pre('save', function(next) {});

schema.methods = {};

const Problem = mongoose.model('Problem', schema);

export default Problem;
