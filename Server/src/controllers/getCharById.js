const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async(req, res) => {
    try{
    const  { id } = req.params;
    const {data} = await axios(`${URL}/${id}`)

     if(!data.name)throw new Error(`ID: ${id} Not found`);

        if(data.name){
            const character = {
                id: data.id,
                name: data.name,
                species: data.species,
                origin: data.origin.name,
                image: data.image,
                status: data.status,
                gender: data.gender
            }
            console.log(character);
           return res.status(200).json(character);
        }
    }

     catch(error){
        error.message.includes("ID")? 
        res.status(404).send(error.message):
        res.status(500).send(error.message)
    }


    
}

module.exports={
    getCharById
}