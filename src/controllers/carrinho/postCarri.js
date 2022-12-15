const criar = async(req,res) => {
    try{
        const db= require('../../connection/db');
        const carrinho = require('../../models/carrinho');
        await db.sync()
        const {status} = req.body
        const {id} = req.params
        console.log(req.body);
        console.log('idUsuario', id);
        const novoCarrinho = await carrinho.create({
            status,
            idUsuario: id,
        });
        console.log(novoCarrinho)
        return res.status(201).json({carrinho:novoCarrinho});
    }catch(erro){
        return res.status(500).json({mensagenError: erro});
    }
}
module.exports = criar;