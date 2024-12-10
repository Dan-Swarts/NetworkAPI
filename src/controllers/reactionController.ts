import { Reaction, Thought } from "../models/index.js";
import { Request, Response } from "express";

export const getReactions = async (_req: Request, res: Response) => {
  try {
    const reactions = await Reaction.find();
    res.json(reactions);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createReaction = async (req: Request, res: Response) => {
  try {
    const reaction = await Reaction.create(req.body);
    const thought = Thought.findOneAndUpdate(
      { _id: req.body.thoughtId },
      { $addToSet: { reactions: reaction._id } },
      { new: true }
    );

    if (!thought) {
      res.status(404).json({
        message: "Reaction created, but found no thought with that ID",
        result: reaction,
      });
    } else {
      res.json("Created the reaction 😈");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
