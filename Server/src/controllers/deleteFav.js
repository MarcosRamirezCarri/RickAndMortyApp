const {Favorite} = require('../DB_connection')

const deleteFav = async (req, res) => {
    const {id} = req.params
    const {UserId} = req.query

    try {

            const deletedFav = await Favorite.findOne({where: {id}})

            await deletedFav.removeUser(UserId)
            res.status(200).json({success: true})
    }
     catch (error) {
        res.status(500).json({message: error.message})
    }

}
module.exports = {deleteFav}