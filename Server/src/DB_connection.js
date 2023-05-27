require('dotenv').config();
const { Sequelize } = require('sequelize');
const  UserModel = require('./models/User.js');
const  FavoriteModel = require('./models/Favorite.js');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);

// EJERCICIO 05vc
// Debajo de este comentario puedes ejecutar la función de los modelos.
FavoriteModel(sequelize);
UserModel(sequelize);
//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
// const { User, Favorite } = sequelize.models;
const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite,{through: 'UserFavorite'});
Favorite.belongsToMany(User,{through: 'UserFavorite'})

module.exports = {
   conn: sequelize,
};
