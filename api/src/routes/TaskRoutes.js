const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const MacaddressValidation = require('../middlewares/MacaddressValidation');
const FindOneValidadtion = require('../middlewares/FindOneValidadtion');

router.get('/filter/:macaddress',MacaddressValidation,TaskController.all);

router.get('/late/:macaddress',MacaddressValidation,TaskController.late);

router.get('/today/:macaddress',MacaddressValidation,TaskController.today);

router.get('/semana/:macaddress',MacaddressValidation,TaskController.semana);

router.get('/mes/:macaddress',MacaddressValidation,TaskController.mes);

router.get('/ano/:macaddress',MacaddressValidation,TaskController.ano);

router.get('/:id',FindOneValidadtion,TaskController.findone);
router.post('/',TaskValidation,TaskController.create);
router.put('/:id/:done',TaskController.done);
router.put('/:id',TaskValidation,TaskController.update);
router.delete('/:id',TaskController.delete);

module.exports = router;