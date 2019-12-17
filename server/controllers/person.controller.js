const Person = require('../models/person');
const personCtrl = {};
personCtrl.getPeople = async (req, res) => {
    const people = await Person.find();
    res.json(people);          
};
personCtrl.createPerson = async (req, res) => {
    const person = new Person({
        documentType: req.body.documentType,
        documentNumber: req.body.documentNumber,
        name: req.body.name,
        lastName: req.body.lastName,
        gender: req.body.gender,
        nationality: req.body.nationality,
        telephoneNumber: req.body.telephoneNumber
    });
    await person.save();
    console.log(person);
    res.json({'status': 'Person saved'});
};
personCtrl.getPerson = async (req, res) => {
    const person = await Person.findById(req.param.id);
    req.json(person);
};
personCtrl.editPerson = async (req, res) => {
    const { id } = req.params;
    const person = {
        documentType: req.body.documentType,
        documentNumber: req.body.documentNumber,
        name: req.body.name,
        lastName: req.body.lastName,
        gender: req.body.gender,
        nationality: req.body.nationality,
        telephoneNumber: req.body.telephoneNumber
    };
    await Person.findByIdAndUpdate(id, {$set: person}, {new: true});
    res.json({'status':'Person Update'});
}; 
personCtrl.deletePerson = async (req, res) => {
    const { id } = req.params;
    await Person.findByIdAndRemove(id);
    res.json({'status':'Person Deleted'});
};

module.exports = personCtrl;