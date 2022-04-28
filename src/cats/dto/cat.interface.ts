import { Document } from 'mongoose';

export interface ICat extends Document {
  id: string;
  name: string;
  age: number;
}
