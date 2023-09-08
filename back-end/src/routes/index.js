const bodyParser = require('body-parser')
const cors = require('cors')
const produtos = require('./produtoRoutes.js')

const router = (app) => {
    app.use(
        bodyParser.json(),
        cors(),
        produtos,        
    )
}

module.exports = router
