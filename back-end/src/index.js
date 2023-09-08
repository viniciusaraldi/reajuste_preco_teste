const express = require('express')
const router = require('./routes')
require("dotenv").config()

const app = express()
const port = process.env.PORT || 3000;

router(app)

app.listen(port, () => {console.log(`Rodando na porta: http://localhost:${port}`)})

module.exports = app
