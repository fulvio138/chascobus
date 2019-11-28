import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  selectedPerson: Person;
  people: Person[];
  readonly URL_API = 'http://localhost:3000/api/people';
  constructor(private http: HttpClient) { 
    this.selectedPerson = new Person();
  }; 

  getPeople(){
    return this.http.get(this.URL_API);
  };

  postPeople(person: Person){
    return this.http.post(this.URL_API, person);
  };

  putPerson(person: Person){
    return this.http.put(this.URL_API + `/${person._id}`, person);
  };

  deletePerson(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  };

}
