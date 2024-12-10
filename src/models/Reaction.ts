import { Schema, model, type Document } from "mongoose";

interface IReaction extends Document {
  reactionBody: string;
  username: string;
  createdAt: Date;
}

const reactionSchema = new Schema<IReaction>(
  {
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Reaction = model<IReaction>("Reaction", reactionSchema);

export default Reaction;
