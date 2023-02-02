import express, { Request, Response } from "express";
import mailList from "../model/users";
import { mailSent } from "../utility";
import { FromAdminMail, userSubject } from "../config";

export const CreateUserEmail = async (req: Request, res: Response) => {
  try {
    const message = `Thank you for your email regarding . I appreciate you taking the time to reach out to us.

        I have received your message and will respond to it as soon as possible. If this matter requires immediate attention, please do not hesitate to contact me by phone at [phone number].
        
        Thank you again for your email. I look forward to hearing back from you soon.`;
    const { name, email } = req.body;
    const User = new mailList({ name, email });
    await mailSent(FromAdminMail, email, userSubject, message);
    const newMail = await User.save();
    return res.status(200).json({
      message: "You have successfully created your Email list",
      newMail,
    });
  } catch (error) {
    return res.status(500).json(error)
  }
};

/** ================ GET TODO LIST    ======================*/

export const GetAllUserEmail = async (req: Request, res: Response) => {
    const todo = await mailList.find({});
    try {
      res.status(200).json({
        message: "Successful",
        todo,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        route: "todo/get router",
      });
    }
  };
