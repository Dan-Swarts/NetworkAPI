import { Router } from 'express';
const router = Router();
import { getReactions, getSpecificReaction, createReaction, deleteReaction } from '../../controllers/reactionController.js';

router.route('/').get(getReactions).post(createReaction);

router.route('/:reactionId').get(getSpecificReaction).delete(deleteReaction);

export default router;