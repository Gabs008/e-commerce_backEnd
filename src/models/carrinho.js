const Sequelize = require('sequelize');
const db = require('../connection/db');
const usuario = require('../models/usuario')
const produto = require('../models/produto')


const carrinho = db.define('carrinhos', {
    id :{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
        autoIncrement: true , 
        primaryKey: true
    },
    status :{
        type:Sequelize.DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false
})

carrinho.belongsTo(produto,{ 
    constraint: true,
    foreignKey: "idProduto" 
})

produto.hasMany(carrinho,{
    constraint: true,
    foreignKey:"idproduto"
});

usuario.belongsTo(carrinho,{
    constraint: true,
    foreignKey: "idUsuario"  
})


// usuario.hasMany(carrinho,{
//     constraint: true,
//     foreignKey: "idUsuario"    
// })




// carrinho.hasMany(produto,{
//     constraint: true,
//     foreignKey:"idproduto"
// });

module.exports = carrinho;
