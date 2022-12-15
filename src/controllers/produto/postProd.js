const criar = async(req,res) => {
    try{
        const db= require('../../connection/db');
        const produto = require('../../models/produto');
        await db.sync({force:true})
        const {titulo,descricao,valor} = req.body
        console.log(req.body)
        const novoProduto = await produto.create({
            titulo,descricao,valor
        });
        console.log(novoProduto)
        return res.status(201).json({produto:novoProduto});
    }catch(erro){
        return res.status(500).json({mensagenError: erro});
    }
}
module.exports = criar;