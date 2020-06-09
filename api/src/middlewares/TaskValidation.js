const TasModel = require('../model/TaskModel');
const { isPast } = require('date-fns'); //Verifica se a data está no passado

const TaskValidation = async (req, res, next) => {
    const { macaddress, tipo, title, description, when } = req.body;
    if (!macaddress)
        return res.status(400).json({ error: 'Macaddress obrigatório' });
    else if (!tipo)
        return res.status(400).json({ error: 'Tipo obrigatório' });
    else if (!title)
        return res.status(400).json({ error: 'Título obrigatório' });
    else if (!description)
        return res.status(400).json({ error: 'Descrição obrigatória' });
    else if (!when)
        return res.status(400).json({ error: 'Data obrigatória' });
    else if (isPast(new Date(when)))
        return res.status(400).json({ error: 'Informada uma data futura!' });
    else {
        let exists;

        //valida se a requisicao é update, para isso verifica se na req existe id
        if (req.params.id) {
            //se o id for diferente do cadastro e existir a mesma data, erro de duplicidade
            exists = await TasModel.findOne({
                '_id': { '$ne': req.params.id }, //operador de negacao
                'when': { '$eq': new Date(when) },//operadaor de igual
                'macaddress': { '$in': macaddress }//contem
            });
        } else {
            exists = await TasModel.findOne({
                'when': { '$eq': new Date(when) },
                'macaddress': { '$in': macaddress }
            });
        }

        if (exists) {
            return res.status(400).json({ error: 'Já existe uma tarefa com esta data e hora' });
        }

        next();
    }
}

module.exports = TaskValidation;