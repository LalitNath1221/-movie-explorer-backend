import mongoose from 'mongoose';

const favoriteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  imdbId: {
    type: String,
    required: true
  },
  title: String,
  poster: String,
  year: String
}, { timestamps: true });

export default mongoose.model('Favorite', favoriteSchema);