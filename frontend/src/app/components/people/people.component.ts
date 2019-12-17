import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { NgForm } from '@angular/forms';
import { Person } from 'src/app/models/person';
import { isFulfilled } from 'q';

export interface SelectType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  providers: [PersonService]
})

export class PeopleComponent implements OnInit {
  
  docuTypes: SelectType[] = [
    {value: 'DNI', viewValue: 'DNI'},
    {value: "cuit", viewValue: "CUIT"},
    {value: "provincial_ci", viewValue: "CI provincial"},
    {value: "identity_card", viewValue: "Cédula de identidad"},
    {value: "enlistment_book", viewValue: "Libreta de enrolamiento"},
    {value: "passport", viewValue: "Pasaporte"},
    {value: "civic_notebook", viewValue: "Libreta cívica"},
  ];  
  genders: SelectType[] = [
    {value: 'M', viewValue: 'Masculino'},
    {value: 'F', viewValue: 'Femenino'}
  ];
    
  displayedColumns: string[] = ['documentType', 'documentNumber', 'name', 'lastName', 'gender', 'nationality', 'telephoneNumber', 'operations'];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPeople();
  }

  addPerson(form: NgForm){
    if(form.value._id){
      this.personService.putPerson(form.value)
        .subscribe(res => {
          console.log(res);
          this.resetForm(form);
          this.getPeople();
        });
    } else {
      this.personService.postPeople(form.value)
      .subscribe(res => {
        console.log(res);
        this.resetForm(form);
        this.getPeople();
      });
    }
  };

  getPeople(){
    this.personService.getPeople()
      .subscribe(res => {
        this.personService.people = res as Person[];
        console.log(res);
      })
  };

  editPerson(person: Person){
    this.personService.selectedPerson = person;
  };

  deletePerson(_id: string){
    if(confirm('Seguro desea eliminar?')){
      this.personService.deletePerson(_id)
        .subscribe(res => {
          console.log(res);
          this.getPeople();
        });
    }
  };

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.personService.selectedPerson = new Person();
    }
  };

}
