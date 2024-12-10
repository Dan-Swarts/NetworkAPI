import { Router } from "express";
const router = Router();
import {
  getThoughts,
  getSpecificThought,
  createThought,
  deleteThought,
  updateThought,
} from "../../controllers/thoughtController.js";

router.route("/").get(getThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getSpecificThought)
  .delete(deleteThought)
  .post(updateThought);

export default router;
