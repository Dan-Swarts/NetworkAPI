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
router.route("/friends/:userId").post(addFriend).delete(removeFriend);
router
  .route("/:userId")
  .get(getSpecificUser)
  .delete(deleteUser)
  .put(updateUser);

export default router;
