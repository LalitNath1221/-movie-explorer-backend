import express from 'express';
import { getFavorites, addFavorite, removeFavorite } from '../controllers/favorites.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/', getFavorites);
router.post('/', addFavorite);
router.delete('/:imdbId', removeFavorite);

export default router;