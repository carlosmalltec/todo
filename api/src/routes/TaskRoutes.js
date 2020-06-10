const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const MacaddressValidation = require('../middlewares/MacaddressValidation');
const FindOneValidadtion = require('../middlewares/FindOneValidadtion');

router.get('/filter/todos/:macaddress',MacaddressValidation,TaskController.todos);
router.get('/filter/atrasada/:macaddress',MacaddressValidation,TaskController.atrasada);
router.get('/filter/dia/:macaddress',MacaddressValidation,TaskController.dia);
router.get('/filter/semana/:macaddress',MacaddressValidation,TaskController.semana);
router.get('/filter/mes/:macaddress',MacaddressValidation,TaskController.mes);
router.get('/filter/ano/:macaddress',MacaddressValidation,TaskController.ano);

router.get('/:id',FindOneValidadtion,TaskController.findone);
router.post('/',TaskValidation,TaskController.create);
router.put('/:id/:done',TaskController.done);
router.put('/:id',TaskValidation,TaskController.update);
router.delete('/:id',TaskController.delete);

module.exports = router;