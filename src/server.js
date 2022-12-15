const express = require('express');
const usuarioRoute = require('./routes/usuarios.routes');
const produtoRoute = require('./routes/produtos.routes');
const carrinhoRoute = require('./routes/carrinho.routes');
const app = express();
const porta = 3000


app.use(express.json());
app.use(usuarioRoute);
app.use(produtoRoute);
app.use(carrinhoRoute);

app.listen(porta, ()=>{
    console.log("server rodando ");
})