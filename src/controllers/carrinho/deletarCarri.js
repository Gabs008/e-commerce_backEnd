const deletar= async (req, res) => {
    const carrinho = require('../../models/carrinho')
    const id = req.params.id
    const carrinhos = await carrinho.findByPk(id)
    await carrinho.destroy({
        where: { id: id }
    });
    return res.status(200).json({ mensagem: "Carrinho deletado com sucesso!", carrinho: carrinhos});
}

module.exports = deletar;