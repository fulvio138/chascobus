import { Injectable } from '@angular/core';
import { UserI } from '../models/user.interface';
//import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //public userData: Observable<UserI>;
  public userData: boolean;
  constructor(private route: Router) {
    this.userData = false    
  }

  login(user: UserI){ 
     const {email, password} = user;
     if (user.email == 'lalala' && user.password == '123'){
       this.userData = true;
      return true;
     }     
     return false;
  };

  // SACAR ESTO DE ACA CUANDO SE HAGA EL LOGIN POSTA!!!!!
  logout(){
     this.userData = false;
     this.route.navigate(['/login'])
  }

}
