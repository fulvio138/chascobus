const express = require('express');
const router = express.Router();

const passengerCtrl = require('../controllers/passenger.controller');

router.get('/', passengerCtrl.getPassengers);
router.post('/', passengerCtrl.createPassenger);
router.get('/:id', passengerCtrl.getPassenger);
router.put('/:id', passengerCtrl.editPassenger);
router.delete('/:id', passengerCtrl.deletePassenger);

module.exports = router;