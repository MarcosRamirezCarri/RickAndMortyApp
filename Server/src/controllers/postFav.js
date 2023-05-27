const {Favorite} = require('../DB_connection')

const postFav = async (req, res) => {
    const {id, name, image, species, status, origin, gender} = req.body
    try {
        console.log({id, name, image, species, status, origin, gender} )
        if ( !name || !status || !species || !gender || !origin || !image){
          return res.status(401).json({ message: "Missing data" });
        }
       await Favorite.create({ name, status, species, gender, origin, image, id })
    
      const favorites = await Favorite.findAll();
      console.log(favorites)
      return res.status(200).json(favorites);
      } catch (error) {
        return res.status(500).json({ error: error.message })
      }
    };


module.exports = {postFav};