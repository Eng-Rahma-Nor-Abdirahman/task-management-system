import express from 'express';

const router = express.Router();

import { getPosts, getPostInfo } from '../controllers/posts.js';

router.get('/', getPosts);
router.get('/:id', getPostInfo);


export default router;