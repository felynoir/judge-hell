import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const field = ['email', 'username', 'password'];
export const schema = new Schema({
  email: {
    type: String,
    unique: true,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
});
