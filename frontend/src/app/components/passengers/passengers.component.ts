import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../../services/passenger.service';
import { NgForm } from '@angular/forms';
import { Passenger } from 'src/app/models/passenger';
import { isFulfilled } from 'q';

declare var M: any;

export interface SelectType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss'],
  providers: [PassengerService]
})

export class PassengersComponent implements OnInit {
  
  docuTypes: SelectType[] = [
    {value: 'dni', viewValue: 'DNI'},
    {value: 'libreta', viewValue: 'Libreta'}
  ];
  
  genders: SelectType[] = [
    {value: 'm', viewValue: 'Masculino'},
    {value: 'f', viewValue: 'Femenino'}
  ];
  isYounger: SelectType[] = [
    {value: '1', viewValue: 'Si'},
    {value: '0', viewValue: 'No'}
  ];
    
  displayedColumns: string[] = ['documentType', 'documentNumber', 'name', 'lastName', 'gender', 'younger', 'origin', 'originProvince', 'destination', 'destinationProvince', 'nationality', 'operations'];

  constructor(private passengerService: PassengerService) { }

  ngOnInit() {
    this.getPassengers();
  }

  addPassenger(form: NgForm){
    console.log(form.value);
    if(form.value._id){
      this.passengerService.putPassenger(form.value)
        .subscribe(res => {
          console.log(res);
          this.resetForm(form);
          M.toast({html:'Se acualizo correctamente'});
          this.getPassengers();
        });
    } else {
      this.passengerService.postPassengers(form.value)
      .subscribe(res => {
        console.log(res);
        this.resetForm(form);
        M.toast({html:'Se agrego correctamente'});
        this.getPassengers();
      });
    }
  };

  getPassengers(){
    this.passengerService.getPassengers()
      .subscribe(res => {
        this.passengerService.passengers = res as Passenger[];
        console.log(res);
      })
  };

  editPassenger(passenger: Passenger){
    this.passengerService.selectedPassenger = passenger;
  };

  deletePassenger(_id: string){
    if(confirm('Seguro desea eliminar?')){
      this.passengerService.deletePassenger(_id)
        .subscribe(res => {
          console.log(res);
          this.getPassengers();
          M.toast({html:'Se elimino correctamente'});
        });
    }
  };

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.passengerService.selectedPassenger = new Passenger();
    }
  };

}
