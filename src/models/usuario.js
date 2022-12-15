const Sequelize = require('sequelize');
const db = require('../connection/db');

const usuario = db.define('usuarios', {
    id :{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false, 
        autoIncrement: true , 
        primaryKey: true
    },
    nome :{
        type: Sequelize.DataTypes.STRING,
        allowNull: false 
    },
    email :{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    senha:{
        type:Sequelize.DataTypes.STRING,
        allowNull: false
    }
});

module.exports = usuario;