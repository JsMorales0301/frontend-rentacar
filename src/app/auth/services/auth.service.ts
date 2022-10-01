import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Login from '../interfaces/login';
import LoginResponse from '../interfaces/loginResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private httpClient: HttpClient ) { }

  loginUser(userData: Login):Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${environment.urlApi}Account/login`, userData);
  }

}
