const express = require ('express');
const routes = require('./routes');

const app = express();

app.use(routes);

app.listen(6000, ()=> console.log('Servidor conectado com sucesso na porta 6000!'));