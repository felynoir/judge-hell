import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// export const field = ['email', 'username', 'password'];
export const schema = new Schema({
  id: Number,
  name: String,
  pdf: String,
  input: [{ type: String }],
  output: [{ type: String }],
  time: Number,
  memory: Number,
});
