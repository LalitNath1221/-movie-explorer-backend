import Favorite from '../models/Favorite.js';

export const getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({ user: req.user._id });
    res.json(favorites);
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message });
  }
};

export const addFavorite = async (req, res) => {
  try {
    const { imdbId, title, poster, year } = req.body;
    const existing = await Favorite.findOne({ user: req.user._id, imdbId });
    if (existing) return res.status(400).json({ message: 'Already in favorites' });

    const favorite = await Favorite.create({
      user: req.user._id,
      imdbId, title, poster, year
    });
    res.status(201).json(favorite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removeFavorite = async (req, res) => {
  try {
    await Favorite.findOneAndDelete({ user: req.user._id, imdbId: req.params.imdbId });
    res.json({ message: 'Removed from favorites' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};