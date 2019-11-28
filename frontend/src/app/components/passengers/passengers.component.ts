import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PassengerService } from '../../services/passenger.service';
import { NgForm } from '@angular/forms';
import { Passenger } from 'src/app/models/passenger';
import { isFulfilled } from 'q';
import * as XLSX from 'xlsx'; 

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
  
  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;  
  title = 'Rossi';  
  ExportTOExcel(travelDestination: any,travelDate:Date) {  
    /*
    let day: string = travelDate.getDate().toString();
    //day = +day < 10 ? ‘0’ + day : day;
    let month: string = (travelDate.getMonth() + 1).toString();
    //month = +month < 10 ? ‘0’ + month : month;
    let year = travelDate.getFullYear();
    console.log(day+month+year);
    */
   
    const destination = travelDestination.value.toLowerCase();
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    XLSX.utils.book_append_sheet(wb, ws, destination); 
    XLSX.utils.sheet_add_aoa(wb,[[1,2], [2,3], [3,4]], {origin: "A2"});
    XLSX.writeFile(wb, 'planilla-viaje-a-'+destination+'.xlsx');  
    
  }; 

  docuTypes: SelectType[] = [
    {value: 'DNI', viewValue: 'DNI'},
    {value: 'Libreta', viewValue: 'Libreta'}
  ];  
  genders: SelectType[] = [
    {value: 'M', viewValue: 'Masculino'},
    {value: 'F', viewValue: 'Femenino'}
  ];
  isYounger: SelectType[] = [
    {value: 'Si', viewValue: 'Si'},
    {value: 'No', viewValue: 'No'}
  ];
    
  displayedColumns: string[] = ['documentType', 'documentNumber', 'name', 'lastName', 'gender', 'younger', 'origin', 'originProvince', 'destination', 'destinationProvince', 'nationality', 'operations'];

  constructor(private passengerService: PassengerService) { }

  ngOnInit() {
    this.getPassengers();
  }

  addPassenger(form: NgForm){
    if(form.value._id){
      this.passengerService.putPassenger(form.value)
        .subscribe(res => {
          console.log(res);
          this.resetForm(form);
          //M.toast({html:'Se acualizo correctamente'});
          this.getPassengers();
        });
    } else {
      this.passengerService.postPassengers(form.value)
      .subscribe(res => {
        console.log(res);
        this.resetForm(form);
        //M.toast({html:'Se agrego correctamente'});
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
          //M.toast({html:'Se elimino correctamente'});
        });
    }
  };

  resetForm(form?: NgForm){
    console.log(form.value.origin);
    const travelOrigin = form.value.origin;
    const travelDestination = form.value.destination;
    const travelOriginProvince = form.value.originProvince;
    const travelDestinationProvince = form.value.destinationProvince;
    if(form){
      //form.reset();
      //this.passengerService.selectedPassenger = new Passenger();
      this.passengerService.selectedPassenger._id = '';
      this.passengerService.selectedPassenger.documentType = '';
      this.passengerService.selectedPassenger.documentNumber = 0;
      this.passengerService.selectedPassenger.name = '';
      this.passengerService.selectedPassenger.lastName = '';
      this.passengerService.selectedPassenger.gender = '';
      this.passengerService.selectedPassenger.younger = '';
      this.passengerService.selectedPassenger.nationality = '';
      this.passengerService.selectedPassenger.origin = travelOrigin;
      this.passengerService.selectedPassenger.destination = travelDestination;
      this.passengerService.selectedPassenger.originProvince = travelOriginProvince;
      this.passengerService.selectedPassenger.destinationProvince = travelDestinationProvince;      
    }
  };

}
