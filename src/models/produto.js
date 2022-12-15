const Sequelize = require('sequelize');
const db = require('../connection/db');

const produto = db.define('produto', {
    id :{
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false, 
        autoIncrement: true , 
        primaryKey: true
    },
    titulo :{
        type: Sequelize.DataTypes.STRING,
        allowNull: false 
    },
    descricao :{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    valor :{
        type: Sequelize.DataTypes.FLOAT,
        allowNull: false
    }
})

module.exports =produto;