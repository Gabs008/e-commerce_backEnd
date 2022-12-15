const pegar = async (req, res) => {
    const usuario = require('../../models/usuario');
    const usuarios = await usuario.findAll();
    return res.status(200).json({usuario:usuarios})
}


module.exports = pegar

