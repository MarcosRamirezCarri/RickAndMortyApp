const {Favorite} = require('../DB_connection')

const deleteFav = async (req, res) => {
  const { id } = req.params;
  const idd = +id;

  console.log("deleteFav", idd);
  try {
    if (id) {
      await Favorite.destroy({ where: { id: idd } });
      const favs = await Favorite.findAll();
      return res.status(200).json(favs);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


module.exports = {deleteFav}