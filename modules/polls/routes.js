import { Router } from 'express';
import { getAll, create, getOne } from './controller.js';

const router = new Router();

router.get('/', getAll);
router.post('/', create);
router.get('/:id', getOne);

export default router;
