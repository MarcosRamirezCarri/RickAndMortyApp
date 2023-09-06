const { Favorite } = require('../DB_connection');

const getFav = async (req, res) => {
    try {
      const allFavorites = await Favorite.findAll({
            attributes: ['id', 'name', 'origin', 'image', 'status', 'gender', 'species']
      });
      res.status(200).json(allFavorites);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  module.exports = {getFav}

