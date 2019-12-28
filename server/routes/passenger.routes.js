const passengerCtrl = require('../controllers/passenger.controller');

module.exports = (router) => {
    router.get('/', passengerCtrl.getPassengers);
    router.post('/', passengerCtrl.createPassenger);
    router.get('/:id', passengerCtrl.getPassenger);
    router.put('/:id', passengerCtrl.editPassenger);
    router.delete('/:id', passengerCtrl.deletePassenger);
}
