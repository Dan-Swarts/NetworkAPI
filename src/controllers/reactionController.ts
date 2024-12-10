import { Reaction, Thought, User } from "../models/index.js";
import { Request, Response } from "express";

export const getReactions = async (_req: Request, res: Response) => {
  try {
    const reactions = await Reaction.find();
    return res.json(reactions);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getSpecificReaction = async (req: Request, res: Response) => {
  try {
    const reaction = await Reaction.findOne({ _id: req.params.reactionId });
    if (!reaction) {
      return res.status(404).json({ message: "Reaction not found." });
    } else {
      return res.status(200).json(reaction);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

// create a reaction
export const createReaction = async (req: Request, res: Response) => {
  try {

    // check the request body for a valid user
    const user = await User.findById(req.body.userId);
    if(!user){
      return res.status(404).json({ message: "User not found" });
    }

    // check the request body for a valid thought
    const thought = await Thought.findById(req.body.thoughtId);
    if(!thought){
      return res.status(404).json({ message: "Thought not found" });
    }

    // create a reaction with the username 
    const reaction = await Reaction.create({
      ...req.body,
      username: user.username,
    });

    // add the reaction to the thought's list
    await Thought.findOneAndUpdate(
      { _id: thought._id },
      { $addToSet: { reactions: reaction._id } },
      { new: true }
    )

    return res.status(200).json(reaction);

  } catch (error) {
    return res.status(500).json(error);
  }
};
