import { Thought, User } from "../models/index.js";
import { Request, Response } from "express";

export const getThoughts = async (_req: Request, res: Response) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.create(req.body);
    const user = User.findOneAndUpdate(
      { _id: req.body.userId },
      { $addToSet: { thoughts: thought._id } },
      { new: true }
    );

    if (!user) {
      res.status(404).json({
        message: "Thought created, but found no thought with that ID",
        result: thought,
      });
    } else {
      res.status(200);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
