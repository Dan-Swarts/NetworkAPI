import { User } from "../models/index.js";
import { Request, Response } from "express";

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getSpecificUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ _id: req.params.userId });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    } else {
      return res.status(200).json(user);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};


// delete a user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    // delete
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.status(200).json({ message: "User successfully deleted." });
  } catch (error) {
    return res.status(500).json(error);
  }
};