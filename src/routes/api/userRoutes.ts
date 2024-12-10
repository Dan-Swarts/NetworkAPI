import { Router } from 'express';
const router = Router();
import { getUsers, getSpecificUser, createUser, deleteUser } from '../../controllers/userController.js';

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSpecificUser).delete(deleteUser);

export default router;