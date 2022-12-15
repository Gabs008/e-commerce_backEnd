const alterar = async (req, res)=>{
    try{
        const user = require ('../../models/usuario');
        const id = req.params.id;
        const{nome,email,senha}= req.body
        const pessoa = await user.findByPk(id);
        await user.update({
            nome:nome || pessoa.nome,
            email:email || pessoa.email,
            senha:senha || pessoa.senha,
        },{ where: { id: id }});
        const usuarioAtualizado = await user.findByPk(id);
        return res.status(200).json({user: usuarioAtualizado});
    }catch(erro) {
      console.log(erro);
    }
}

module.exports = alterar