const database = require('../models')

class packsController {

    static listaPacks = async (req, res) => {
        try {
            const listaTodosPacks = await database.Packs.findAll({})
            return res.status(200).json({data: listaTodosPacks}) 
        } catch (Err) {
            return res.status(500).json({data: Err.message})
        }
    }
}

module.exports = packsController
