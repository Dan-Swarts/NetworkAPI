import { Router } from 'express';
const router = Router();
import { getUsers, createUser } from '../../controllers/userController.js';

router.route('/').get(getUsers).post(createUser);

export default router;