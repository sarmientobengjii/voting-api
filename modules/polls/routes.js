import { Router } from 'express';
import { create, getAll, getOne } from './controller.js';

const router = new Router();

router.get('/', getAll);
router.post('/', create);
router.get('/polls/:id', getOne);

export default router;
