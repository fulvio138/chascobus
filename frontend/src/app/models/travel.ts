import { Person } from './person';

export class Travel {

    constructor(
        _id = '',
        date = '',
        origin = '',
        originProvince = '',
        destination = '',
        destinationProvince = '',
        passengers = []
    ){
        this._id = _id;
        this.date = date;
        this.origin = origin;
        this.originProvince = originProvince;
        this.destination = destination;
        this.destinationProvince = destinationProvince;
        this.passengers = passengers
    }
    _id: string;
    date: string;
    origin: string;
    originProvince: string;
    destination: string;
    destinationProvince: string;
    nationality: string;
    passengers: Person[]
}