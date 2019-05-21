import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// export const field = ['email', 'username', 'password'];
export const schema = new Schema({
  problem_id: { type: Schema.Types.ObjectId, ref: 'Problem' },
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  grading: String,
  time: Number,
  status: String,
});
