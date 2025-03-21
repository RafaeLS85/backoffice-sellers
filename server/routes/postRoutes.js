import express from 'express';
import { getAllPosts, getPostById } from '../controllers/postController.js';

import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getAllPosts);
router.get('/:id', authMiddleware, getPostById);

export default router;
