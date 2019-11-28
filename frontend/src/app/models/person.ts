export class Person {

    constructor(_id = '', 
                documentType = '', 
                documentNumber = 0, 
                name = '', 
                lastName = '',
                gender = '',                
                nationality = '') {
        this._id = _id;
        this.documentType = documentType;
        this.documentNumber = documentNumber;
        this.name = name;
        this.lastName = lastName;
        this.gender = gender;
        this.nationality = nationality
    }   

    _id: string;
    documentType: string;
    documentNumber: number;
    name: string;
    lastName: string;
    gender: string;
    nationality: string;
}
