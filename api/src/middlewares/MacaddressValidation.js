const TasModel = require('../model/TaskModel');

const MacaddressValidation = async (req, res, next) => {
    if (!req.params.macaddress) {
        return res.status(400).json({ error: 'Macaddress obrigatório' });
    } else {
        let exists;

        exists = await TasModel.findOne({
            'macaddress': { '$in': req.params.macaddress }
        });

        if (!exists) {
            return res.status(500).json({ error: 'Nenhum resultado encontrado' });
        }

        next();
    }
}

module.exports = MacaddressValidation;