import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const schema = new Schema({
  email: {
    type: String,
    unique: true,
    require: [true],
  },
  name: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: [true],
  },
});
