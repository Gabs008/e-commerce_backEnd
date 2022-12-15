const express = require('express');
const usuarioRoute = express.Router();

const pegar = require('../controllers/usuario/getUser');
const criar = require('../controllers/usuario/postUser');
const alterar = require('../controllers/usuario/putUser');
const deletar = require('../controllers/usuario/deleteUser');
const login = require('../controllers/usuario/loginUser');

usuarioRoute.get("/usuario", pegar);
usuarioRoute.post("/usuario", criar);
usuarioRoute.post("/login", login)
usuarioRoute.put("/usuario/:id", alterar);
usuarioRoute.delete("/usuario/:id", deletar);





module.exports = usuarioRoute;
