import mongoose from 'mongoose';

export const catsSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
