let myFavorites = [];

const addFavorite = (req, res) => {
    const character = req.body;

    myFavorites.push(character);

    return res.status(200).json(myFavorites)

}

const deleteFavorite = (req, res) =>{

    const { id } = req.params;

    myFavorites = myFavorites.filter((char) => char.id !== +id);
    console.log(myFavorites)

    return res.status(200).json(myFavorites);

}

module.exports = {
    deleteFavorite,
    addFavorite
}