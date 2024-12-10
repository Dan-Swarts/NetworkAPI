import { Thought, User } from "../models/index.js";
import { Request, Response } from "express";

// get all thoughts
export const getThoughts = async (_req: Request, res: Response) => {
  try {
    const thoughts = await Thought.find();
    return res.json(thoughts);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// get one thought by its ID
export const getSpecificThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findOne({ _id: req.params.thoughtId });
    if (!thought) {
      return res.status(404).json({ message: "Thought not found." });
    } else {
      return res.status(200).json(thought);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

// create a thought
export const createThought = async (req: Request, res: Response) => {
  try {
    
    // check the request body for a valid user
    const user = await User.findById(req.body.userId);
    if (!user) {
      return res.status(404).json({message: "No user found with that ID",});
    }

    // create a thought with the user's username
    const thought = await Thought.create({
      ...req.body,
      username: user.username,
    });

    // add the thought to the user's list
    await User.findOneAndUpdate(
      { _id: user._id },
      { $addToSet: { thoughts: thought._id } },
      { new: true }
    );
    return res.status(200).json(thought);
    
  } catch (error) {
    return res.status(500).json(error);
  }
};
