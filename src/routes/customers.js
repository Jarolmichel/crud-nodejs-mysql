const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');


router.get('/', customerController.list);//En este caso estamos utilizando el codigo que esta en otro archivo llamado customerController
router.post('/add', customerController.save);
router.get('/delete/:id', customerController.delete);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);

module.exports = router;