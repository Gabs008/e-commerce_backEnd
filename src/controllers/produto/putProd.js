const alterar = async (req, res)=>{
    try{
        const produto = require('../../models/produto');
        const id = req.params.id;
        const {titulo,descricao,valor} = req.body
        const objeto = await produto.findByPk(id)
        await produto.update({
            titulo:titulo || objeto.titulo, 
            descricao:descricao || objeto.descricao,
            valor:valor || objeto.valor
        },{ where: { id: id }});
        const produtoAtualizado = await produto.findByPk(id);
        return res.status(200).json({produto: produtoAtualizado});
    }catch(erro){
        console.error(erro);
    }
}

module.exports = alterar