import { Injectable } from '@angular/core';
import { UserI } from '../models/user.interface';

import { HttpClient } from '@angular/common/http';
import { JwtResponseI } from '../models/jwt-response.interface';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER: string = 'http://localhost:3000/api';
  authSubject = new BehaviorSubject(false);
  private token: string;
  constructor(private httpClient: HttpClient) { }

  register(user: UserI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/register`,
      user).pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            // guardar token
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
          }
        })
      );
  }

  login(user: UserI): Observable<JwtResponseI> {
    console.log('longin --> '+user);
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/login`,
      user).pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            // guardar token
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
          }
        })
      );
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

}
 /*
export class AuthService {
 
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
*/