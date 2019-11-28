const express = require('express');
const router = express.Router();

const personCtrl = require('../controllers/person.controller');

router.get('/', personCtrl.getPeople);
router.post('/', personCtrl.createPerson);
router.get('/:id', personCtrl.getPerson);
router.put('/:id', personCtrl.editPerson);
router.delete('/:id', personCtrl.deletePerson);

module.exports = router;