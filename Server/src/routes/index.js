const { logIn } = require("../controllers/login");
const { getCharById } = require("../controllers/getCharById");
const { deleteFav } = require("../controllers/deleteFav");
const { postFav  } = require("../controllers/postFav");
const { postUser } = require("../controllers/postUser");


const route = require("express").Router()

route.get('/character/:id', getCharById);

route.post('/fav', postFav);

route.delete('/fav/:id', deleteFav);

route.get('/login', logIn);

route.post('/login',postUser);


module.exports = route;