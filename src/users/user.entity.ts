import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

export interface User extends mongoose.Document {
  name: string;
  email: string;
  age: number;
}
