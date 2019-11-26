export class Passenger {

    constructor(_id = '', 
                documentType = '', 
                documentNumber = 0, 
                name = '', 
                lastName = '',
                gender = '',
                younger = '',
                origin = '',
                originProvince = '',
                destination = '',
                destinationProvince = '',
                nationality = '') {
        this._id = _id;
        this.documentType = documentType;
        this.documentNumber = documentNumber;
        this.name = name;
        this.lastName = lastName;
        this.gender = gender;
        this.younger = younger;
        this.origin = origin;
        this.originProvince = originProvince;
        this.destination = destination;
        this.destinationProvince = destinationProvince;
        this.nationality = nationality
    }   

    _id: string;
    documentType: string;
    documentNumber: number;
    name: string;
    lastName: string;
    gender: string;
    younger: string;
    origin: string;
    originProvince: string;
    destination: string;
    destinationProvince: string;
    nationality: string;
}
