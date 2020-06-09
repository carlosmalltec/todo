const TasModel = require('../model/TaskModel');

const FindOneValidadtion = async (req, res, next) => {
    if (!req.params.id) {
        return res.status(400).json({ error: 'ID obrigatório' });
    } else {
        // let exists;

        // exists = await TasModel.findOne({
        //     '_id': { '$in': req.params.id }
        // });

        // if (!exists) {
        //     return res.status(500).json({ error: 'Nenhum resultado encontrado' });
        // }

        next();
    }
}

module.exports = FindOneValidadtion;