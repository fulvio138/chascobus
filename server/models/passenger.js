const mongoose = require('mongoose');
const { Schema } = mongoose;

const PassengerSchema = new Schema({
    documentType: {type: String, required: true},
    documentNumber: {type: Number, required: true},
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    gender: {type: String, required: true},
    younger: {type: String, required: true},
    origin: {type: String, required: true},
    originProvince: {type: String, required: true},
    destination: {type: String, required: true},
    destinationProvince: {type: String, required: true},
    nationality: {type: String, required: true}
});

module.exports = mongoose.model('Passenger', PassengerSchema);

