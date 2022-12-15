const alterar = async (req, res)=>{
    try{
        const carrinho = require('../../models/carrinho');
        const id = req.params.id;
        const {status} = req.body
        const carrinhos = await carrinho.findByPk(id)
        await carrinho.update({
            status: status|| carrinhos.status
        },{ where: { id: id }});
        const carrinhoAtualizado = await carrinho.findByPk(id);
        return res.status(200).json({carrinho:carrinhoAtualizado});
    }catch(erro){
        console.error(erro);
    }
}

module.exports = alterar