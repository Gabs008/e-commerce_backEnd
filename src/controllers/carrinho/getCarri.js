const pegar = async (req, res) => {
    const carrinho = require('../../models/carrinho');
    const carrinhos = await carrinho.findAll();
    res.status(200).json({carrinho: carrinhos});
}


const pegandoId = async (req, res) => {
    try {
        const carrinho = require('../../models/carrinho');
        const id = req.params.id;
        const carrinhos = await carrinho.findByPk(id);
        console.log(carrinhos);
        if(!carrinhos){
        return res.status(401).json({message: "Carrinho não encontrado"})
    }
    }catch(err){
        res.json({message:"Error"})
    }
}


module.exports = pegar, pegandoId;

