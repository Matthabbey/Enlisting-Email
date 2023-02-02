import mongoose, { Schema } from "mongoose";

interface EmailInstance {
  email: string
}

const TodoModel = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true,
  }
);

const EmailList = mongoose.model<EmailInstance>("Todo", TodoModel);

export default EmailInstance;
