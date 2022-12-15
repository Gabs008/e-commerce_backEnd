const express = require('express');
const carrinhoRoute = express.Router();

const pegar = require('../controllers/carrinho/getCarri');
const pegandoId = require('../controllers/carrinho/getCarri');
const criar = require('../controllers/carrinho/postCarri');
const alterar = require('../controllers/carrinho/putCarri');
const deletar = require('../controllers/carrinho/deletarCarri')

carrinhoRoute.get('/carrinho', pegar);
carrinhoRoute.get('/carrinho/:id', pegandoId);
carrinhoRoute.post('/carrinho/:id', criar);
carrinhoRoute.put('/carrinho/:id', alterar);
carrinhoRoute.delete('/carrinho/:id', deletar);
module.exports = carrinhoRoute;