const{ DataTypes} = require('sequelize');
const{ createDB} = require('../config/db'); //these are just objects where we impost the fucitonality

const User = createDB.define("users",{
    id:{
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name:DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isSeller:{
        type: DataTypes.BOOLEAN,
        defaultValue: false

    }
});
module.exports = User;