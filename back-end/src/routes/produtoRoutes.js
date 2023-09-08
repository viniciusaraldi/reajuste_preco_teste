const express = require('express')
const upload = require('../middleware/upload.js')
const produtoController = require('../controller/produtoController.js');

const routes = express.Router();

routes
    .get("/produtos", produtoController.listaProduto)
    .get("/produtos/:id", produtoController.listaProdutoId)
    // .post("/produtos/planilha", upload.single('csvFile'), produtoController.atualizaPlanilhaProduto)
    .put("/produtos/via/planilha", upload.single('csvFile'), produtoController.atualizaProduto)


module.exports = routes