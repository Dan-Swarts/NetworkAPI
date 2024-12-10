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

// edit a user
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { username, email } = req.body;

    // find and update the thought
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { username, email },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// add a friend
export const addFriend = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { friendUsername } = req.body;

    // Find the user by their ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Find the friend by their username
    const friend = await User.findOne({ username: friendUsername });
    if (!friend) {
      return res
        .status(404)
        .json({ message: "Friend not found with the given username." });
    }

    // Add the friend to the user's friends list
    await User.findOneAndUpdate(
      { _id: user._id },
      { $addToSet: { friends: friend._id } }
    );

    return res.status(200).json({
      message: "Friend added successfully!",
      friends: user.friends, // Optionally return the updated friends list
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

// add a friend
export const removeFriend = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { friendUsername } = req.body;

    // Find the user by their ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Find the friend by their username
    const friend = await User.findOne({ username: friendUsername });
    if (!friend) {
      return res
        .status(404)
        .json({ message: "Friend not found with the given username." });
    }

    // Remove the friend from the user's friends list
    await User.findOneAndUpdate(
      { _id: user._id },
      { $pull: { friends: friend._id } }
    );

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json(error);
  }
};
