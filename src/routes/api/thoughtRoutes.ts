import { Router } from 'express';
const router = Router();
import { getThoughts, getSpecificThought, createThought, deleteThought } from '../../controllers/thoughtController.js';

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSpecificThought).delete(deleteThought);

export default router;