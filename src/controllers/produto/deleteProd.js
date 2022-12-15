const deletar= async (req, res) => {
    const produto = require('../../models/produto')
    const id = req.params.id
    const objeto = await produto.findByPk(id)
    await produto.destroy({
        where: { id: id }
    });
    return res.status(200).json({ mensagem: "Produto deletado com sucesso!", produto: objeto});
}

module.exports = deletar;