const pegar = async (req, res) => {
    const produto = require('../../models/produto');
    const produtos = await produto.findAll();
    res.status(200).json({produto:produtos});
}

module.exports = pegar;


const pegandoId = async (req, res) => {
    try {
        const produto = require('../../models/produto');
        const id = req.params.id;
        const produtos = await produto.findByPk(id);
        console.log(produtos);
        if(!produtos){
        return res.status(401).json({message: "Produto não encontrado"})
    }
    }catch(erro){
        res.json({message:"Error"})
    }
}


module.exports = pegar, pegandoId;