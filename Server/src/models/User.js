const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true
    },
    passWord:{
        type: DataTypes.STRING,
        allowNull: false
    }
   }, { timestamps: false, tableName: 'user' });
};
