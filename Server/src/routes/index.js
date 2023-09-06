const { login } = require("../controllers/login");
const { getCharById } = require("../controllers/getCharById");
const { deleteFav } = require("../controllers/deleteFav");
const { postFav  } = require("../controllers/postFav");
const { getFav } = require('../controllers/getFavs')
const { postRegister } = require("../controllers/postUser");


const route = require("express").Router()

route.get('/character/:id', getCharById);

route.get('/fav', getFav)

route.post('/fav', postFav);

route.delete('/fav/:id', deleteFav);

route.get('/login', login);

route.post('/login', postRegister);


module.exports = route;