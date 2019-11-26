import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { Passenger } from '../models/passenger';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  selectedPassenger: Passenger;
  passengers: Passenger[];
  readonly URL_API = 'http://localhost:3000/api/passengers';
  constructor(private http: HttpClient) { 
    this.selectedPassenger = new Passenger();
  }; 

  getPassengers(){
    return this.http.get(this.URL_API);
  };

  postPassengers(passenger: Passenger){
    return this.http.post(this.URL_API, passenger);
  };

  putPassenger(passenger: Passenger){
    return this.http.put(this.URL_API + `/${passenger._id}`, passenger);
  };

  deletePassenger(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  };

}
