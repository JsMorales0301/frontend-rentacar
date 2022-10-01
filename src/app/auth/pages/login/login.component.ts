import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Login from '../../interfaces/login';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin : FormGroup = new FormGroup({});
  public isCheck : any;
  public patternPassword = '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/'

  constructor( 
    private formBuilder : FormBuilder ,
    private authService: AuthService ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', 
        [ 
          Validators.required, 
          Validators.email,
          Validators.nullValidator 
        ]
      ],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15)
      ]]
    });
  }

  sendDataLogin(): void {
    const email = this.formLogin.controls['email'].value;
    const password = this.formLogin.controls['password'].value;

    const userData: Login = {
      email,
      password
    } 

    this.authService.loginUser(userData)
      .subscribe( data => {
        console.log(data.token)
      });
    
  }

}
