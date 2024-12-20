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
  .put(updateThought);

export default router;
