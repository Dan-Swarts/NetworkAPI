import { Router } from "express";
const router = Router();
import {
  getUsers,
  getSpecificUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} from "../../controllers/userController.js";

router.route("/").get(getUsers).post(createUser);

router
  .route("/:userId")
  .get(getSpecificUser)
  .delete(deleteUser)
  .post(updateUser);

router.route("friends").post(addFriend).delete(removeFriend)

export default router;
