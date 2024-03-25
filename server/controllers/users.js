import bcrypt from "bcryptjs"; //hash the password
import jwt from "jsonwebtoken"; //store user in a browser for specific amount of time->stay signed in.

import UserModel from "../models/user.js";
import { json } from "express";

const secret = "test";

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User Does Not Exist!" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    //Comparing the entered password and password entered earlier

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid Credential!" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      secret,
      { expiresIn: "1h" }
    ); //._id is same as node.js default...

    res
      .status(200)
      .json({
        result: existingUser,
        token: token,
        message: "Login Succesful",
        ok: true,
      });
  } catch (error) {
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

export const signup = async (req, res) => {
  const { name, email, password, confirmPassword, userType } = req?.body; // depends on registration form...

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser)
      return res
        .status(400)
        .json({ message: "Email Already Has An Account. Kindly Sign In!",ok:true });

    if (password != confirmPassword)
      return res.status(403).json({ message: "Passwords do not match!" });
    //Hash The Password
    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModel.create({
      email,
      password: hashedPassword,
      name: `${name}`,
      userType: `${userType}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });

    res
      .status(201)
      .json({ result, token, ok: true, message: "Registration Successful" });
  } catch (error) {
    res.status(500).json({ message: "Something Went Wrong" });
    console.log("This is the error", error);
  }
};
