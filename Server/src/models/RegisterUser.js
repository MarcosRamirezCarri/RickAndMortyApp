const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define(  'registerUser',
      {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
         },
         passWord: {
            type: DataTypes.STRING,
            allowNull: false,
         },
      },
      {
         timestamps: false,
      }
   );

   
   };


