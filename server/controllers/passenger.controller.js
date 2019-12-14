
const Passenger = require ('../models/passenger');
const passengerCtrl = {};

passengerCtrl.getPassengers = async (req, res) => {
    const passengers = await Passenger.find();
    res.json(passengers);          
    console.log("alerrrta bogota");
};

passengerCtrl.createPassenger = async (req, res) => {
    const passenger = new Passenger({
        documentType: req.body.documentType,
        documentNumber: req.body.documentNumber,
        name: req.body.name,
        lastName: req.body.lastName,
        gender: req.body.gender,
        younger: req.body.younger,
        origin: req.body.origin,
        originProvince: req.body.originProvince,
        destination: req.body.destination,
        destinationProvince: req.body.destinationProvince,
        nationality: req.body.nationality
    });
    await passenger.save();
    console.log(passenger);
    res.json({'status': 'passenger saved'});
};

passengerCtrl.getPassenger = async (req, res) => {
    const passenger = await Passenger.findById(req.param.id);
    req.json(passenger);
};

passengerCtrl.editPassenger = async (req, res) => {
    const { id } = req.params;
    const passenger = {
        documentNumber: req.body.documentNumber,
        name: req.body.name,
        lastName: req.body.lastName
    };
    await Passenger.findByIdAndUpdate(id, {$set: passenger}, {new: true});
    res.json({'status':'Passenger Update'});
};

passengerCtrl.deletePassenger = async (req, res) => {
    const { id } = req.params;
    await Passenger.findByIdAndRemove(id);
    res.json({'status':'Passenger Deleted'});
};

module.exports = passengerCtrl;
