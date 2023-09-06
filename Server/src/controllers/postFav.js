const {Favorite} = require('../DB_connection')

const postFav = async (req, res) => {
  const { image, name, species, gender, origin, status, id } = req.body;
  console.log("post", id);

  try {
    if (!name || !image || !species || !gender || !status || !origin || !id)
      return res.status(401).send("Faltan datos");

    await Favorite.findOrCreate({
      where: { name, status, origin, image, species, gender, id },
    });
    const favs = await Favorite.findAll();
    return res.status(200).json(favs);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {postFav};