import { Router } from 'express';
const router = Router();
import { getUsers, getSpecificUser, createUser } from '../../controllers/userController.js';

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSpecificUser);

export default router;