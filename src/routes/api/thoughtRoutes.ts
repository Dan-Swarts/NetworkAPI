import { Router } from 'express';
const router = Router();
import { getThoughts, getSpecificThought, createThought } from '../../controllers/thoughtController.js';

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSpecificThought);

export default router;