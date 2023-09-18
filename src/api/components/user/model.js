import { Schema } from 'mongoose';
import db from '../../connection/dbmaster.js';

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Please provide a name.'],
    },
    age: {
      type: Number,
      required: [true, 'Please provide age.'],
    },
    city: {
      type: String,
      required: [true, 'Please provide city.'],
    },
  },
  { timestamps: true },
);

const User = db.model('user', userSchema);
export default User;
