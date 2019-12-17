const mongoose = require('mongoose');
const { Schema } = mongoose;

const PersonSchema = new Schema({
    documentType: {type: String, required: true},
    documentNumber: {type: Number, required: true},
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    gender: {type: String, required: true},
    nationality: {type: String, required: true},
    telephoneNumber: {type: Number, required: true}
});

module.exports = mongoose.model('Person', PersonSchema);

