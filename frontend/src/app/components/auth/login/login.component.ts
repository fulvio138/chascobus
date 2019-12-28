import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { UserI } from '../../../shared/models/user.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  ngOnInit() {
    /*
    const user : UserI = {
      email: 'lalal',
      password: '12345'
    };
    this.authSvc.login(user);
    */
  }
 
  /*
  onLogin(form: UserI){
    //console.log(form)
    let res = this.authService.login(form);
    if (res) {
      console.log('logeado');
      this.router.navigate(['/'])
    }
  }
  */
 onLogin(form): void {
  console.log(form);
  this.authService.login(form).subscribe(res => {
    this.router.navigateByUrl('/');
  });
}
}
