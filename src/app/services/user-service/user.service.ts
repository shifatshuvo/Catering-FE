import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateOrder, odr, order, user } from '../../interface/data-types';
import { Observable } from 'rxjs';



const BASE_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  createOrder(data: CreateOrder): Observable<string> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `${token}` });
    
    return this.http.post(BASE_URL + '/orders', data, {
      headers: headers,
      responseType: 'text' // Set response type to 'text'
    });
  }

  userOrderListById(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `${token}` });
    const res = this.http.get<order[]>(BASE_URL + `/orders/user-orders/${id}`, { headers: headers });
    return res;
  }

  getUserById(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `${token}` });
    return this.http.get<user>(`http://localhost:8080/users/${id}`, { headers: headers });
  }
}
