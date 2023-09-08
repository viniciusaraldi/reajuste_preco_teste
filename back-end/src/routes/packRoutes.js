const express = require('express')
const packsController = require('../controller/packsController.js')

const routes = express.Router();

routes
    .get("/packs", packsController.listaPacks)


module.exports = routes