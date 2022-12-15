const deletar = async (req,res) => {
    const user = require ('../../models/usuario');
    const id = req.params.id;
    const pessoa = await user.findByPk(id);
    await user.destroy({
        where: {id: id}
    });
    return res.status(200).json({ mensagem: "Usuario deletado com sucesso!", usuario: pessoa });
}

module.exports = deletar