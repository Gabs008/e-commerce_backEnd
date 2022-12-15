const express = require('express');
const produtoRoute = express.Router();

const pegar = require('../controllers/produto/getProd');
const pegandoId = require('../controllers/produto/getProd');
const criar = require('../controllers/produto/postProd');
const alterar = require('../controllers/produto/putProd');
const deletar = require('../controllers/produto/deleteProd');

produtoRoute.get('/produto', pegar);
produtoRoute.get('/produto/:id', pegandoId);
produtoRoute.post('/produto', criar);
produtoRoute.put('/produto/:id', alterar);
produtoRoute.delete('/produto/:id', deletar);


module.exports = produtoRoute;