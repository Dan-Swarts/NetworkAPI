import { Router } from "express";
const router = Router();
import {
  getReactions,
  getSpecificReaction,
  createReaction,
  deleteReaction,
  updateReaction,
} from "../../controllers/reactionController.js";

router.route("/").get(getReactions).post(createReaction);

router
  .route("/:reactionId")
  .get(getSpecificReaction)
  .delete(deleteReaction)
  .put(updateReaction);

export default router;
