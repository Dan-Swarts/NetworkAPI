import { Router } from "express";
const router = Router();
import {
  getUsers,
  getSpecificUser,
  createUser,
  deleteUser,
  updateUser,
} from "../../controllers/userController.js";

router.route("/").get(getUsers).post(createUser);

router
  .route("/:userId")
  .get(getSpecificUser)
  .delete(deleteUser)
  .post(updateUser);

export default router;
