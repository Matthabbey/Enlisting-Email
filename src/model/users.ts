import mongoose, { Schema } from "mongoose";

interface EmailInstance {
  email: string,
  timestamps: string
  name: string
}

const EmailModel = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
  }
);

const mailList = mongoose.model<EmailInstance>("Listing", EmailModel);

export default mailList;
