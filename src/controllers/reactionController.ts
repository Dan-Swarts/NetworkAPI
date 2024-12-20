import { Reaction, Thought, User } from "../models/index.js";
import { Request, Response } from "express";

// get all reactions
export const getReactions = async (_req: Request, res: Response) => {
  try {
    const reactions = await Reaction.find();
    return res.json(reactions);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// get a reaction by ID
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

// delete a reaction
export const deleteReaction = async (req: Request, res: Response) => {
  try {
    const { reactionId } = req.params;

    // delete the reaction
    const reaction = await Reaction.findByIdAndDelete(reactionId);

    if (!reaction) {
      return res.status(404).json({ message: "Reaction not found." });
    }

    return res.status(200).json({ message: "Reaction successfully deleted." });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// edit a thought
export const updateReaction = async (req: Request, res: Response) => {
  try {
    const { reactionId } = req.params;
    const { reactionBody } = req.body;

    // find and update the thought
    const updatedReaction = await Reaction.findByIdAndUpdate(
      reactionId,
      { reactionBody },
      { new: true, runValidators: true }
    );

    if (!updatedReaction) {
      return res.status(404).json({ message: "Reaction not found." });
    }

    return res.status(200).json(updatedReaction);
  } catch (error) {
    return res.status(500).json(error);
  }
};
