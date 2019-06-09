import mongoose from 'mongoose';
import { schema } from './schema';

// Hash the user password on creation
schema.pre('save', function(next) {});

schema.methods = {};

const Submission = mongoose.model('Submission', schema);

export default Submission;
