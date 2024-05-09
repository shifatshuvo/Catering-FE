import { AuthResponse } from './../interface/auth-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(signInForm: FormGroup): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(BASE_URL + '/auth/sign-in', signInForm.getRawValue());
  }

}
