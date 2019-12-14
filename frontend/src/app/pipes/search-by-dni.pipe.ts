import { Pipe, PipeTransform } from '@angular/core';
import { Passenger } from 'src/app/models/passenger';
import { PassengerService } from '../services/passenger.service';


@Pipe({
  name: 'searchByDni'
})
export class SearchByDniPipe implements PipeTransform {

  constructor(private passengerService: PassengerService) { }
  transform( dni: number){
    let passenger: Passenger
    let p = [];
    this.passengerService.getPassengers()
      .subscribe(res => {
        this.passengerService.passengers = res as Passenger[];
      })
    console.log(dni)
    p = this.passengerService.passengers.filter(user => user.documentNumber == dni)
    //console.log(p[0] != undefined)
    if (p[0] != undefined)
      this.passengerService.selectedPassenger = p[0]
    //if(!dni) return this.passengerService.getPassengers()
    //p = this.passengerService.passengers.filter(user => user.documentNumber == dni)
    //if (p.length != 0) console.log('si'); else console.log('no')
    //if (p.length != 0)
      //this.passengerService.selectedPassenger = p as Passenger
  }

}
