const TaskModel = require('../model/TaskModel');
const {startOfToday, endOfDay, startOfWeek, endOfWeek,
startOfMonth, endOfMonth, startOfYear, endOfYear} = require('date-fns');
const current = new Date();
class TaskController {

    async todos(req, res) {
        await TaskModel.find({ macaddress: { '$in': req.params.macaddress } })
            .sort('when')
            .then(response => {
                return res.status(200).json(response);
            }
            ).catch(error => {
                return res.status(500).json(error);
            })
    }

    async findone(req, res) {
        await TaskModel.findById({ '_id': req.params.id })
            .then(response => {
                return res.status(200).json(response);
            }
            ).catch(error => {
                return res.status(500).json(error);
            })
    }

    async create(req, res) {
        const task = new TaskModel(req.body); //Instancia da model com os valores
        await task.save()
            .then(response => {
                return res.status(200).json(response);
            }
            ).catch(error => {
                return res.status(500).json(error);
            })
    }

    async update(req, res) {
        await TaskModel.findByIdAndUpdate(
            { '_id': req.params.id },
            req.body, // bloco a ser atualizao
            { new: true }
        )
            .then(response => {
                return res.status(200).json(response);
            }
            ).catch(error => {
                return res.status(500).json(error);
            })
    }

    async delete(req, res) {
        await TaskModel.findOneAndDelete({ '_id': req.params.id })
            .then(response => {
                return res.status(200).json(response);
            }
            ).catch(error => {
                return res.status(500).json(error);
            })
    }

    async done(req, res) {
        await TaskModel.findByIdAndUpdate(
            { '_id': req.params.id },
            { 'done': req.params.done }, //campo a ser atualizado
            { new: true }
        )
            .then(response => {
                return res.status(200).json(response);
            }
            ).catch(error => {
                return res.status(500).json(error);
            })
    }
    async atrasada(req, res) {
        await TaskModel.find({
            'when': { '$lt': current }, //<=
            'macaddress': { '$in': req.params.macaddress }
        }).sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }
    async dia(req, res) {
        await TaskModel.find({
            'macaddress': { '$in': req.params.macaddress },
            'when': { '$gte': startOfToday(current), '$lte': endOfDay(current) }, //>= e <=
        }).sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async semana(req, res) {
        await TaskModel.find({
            'macaddress': { '$in': req.params.macaddress },
            'when': { '$gte': startOfWeek(current), '$lte': endOfWeek(current) }, //>= e <=
        }).sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async mes(req, res) {
        await TaskModel.find({
            'macaddress': { '$in': req.params.macaddress },
            'when': { '$gte': startOfMonth(current), '$lte': endOfMonth(current) }, //>= e <=
        }).sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async ano(req, res) {
        await TaskModel.find({
            'macaddress': { '$in': req.params.macaddress },
            'when': { '$gte': startOfYear(current), '$lte': endOfYear(current) }, //>= e <=
        }).sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }
}

module.exports = new TaskController();
