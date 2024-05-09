import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateOrder, odr, order, pack, user } from '../../interface/data-types';
import { Observable } from 'rxjs';



const BASE_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root',
})

export class AdminOrderService {
  constructor(private http: HttpClient) {}


  
  // -------- Order ----------


  create(data: CreateOrder): Observable<string> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `${token}` });
    
    return this.http.post(BASE_URL + '/orders', data, {
      headers: headers,
      responseType: 'text' // Set response type to 'text'
    });
  }

  list() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});
    
    const res = this.http.get<order[]>(BASE_URL + '/orders', {
      headers: headers,
    });
    return res;
  }

  updateOrder(data: odr) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});
    const id = data.orderId;

    return this.http.put<void>(BASE_URL + `/orders/${id}`, data, {
      headers: headers,
    });
  }


  deleteOrder(id: number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});
    return this.http.delete(`http://localhost:8080/orders/${id}`, { headers: headers, responseType: 'text' })
  }


  getOrder(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});
    return this.http.get<order>(`http://localhost:8080/orders/${id}`, {headers: headers});
  }


  // -------- Customer ----------


  uList() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});
    const res = this.http.get<user[]>('http://localhost:8080/users', { headers: headers });
    return res;
  }

  createCustomer(data: user): Observable<string> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});

      return this.http.post(BASE_URL + '/auth/sign-up', data, { 
        headers: headers,  
        responseType: 'text' // Set response type to 'text'
      });
  }


  getCustomer(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});
    return this.http.get<user>(`http://localhost:8080/users/${id}`, { headers: headers });
  }


  updateCustomer(data: user) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});
    const id = data.id;

    return this.http.put<void>(BASE_URL + `/users/${id}`, data, {
      headers: headers,
      responseType: `${'text' as 'json'}`
    });
  }



  deleteCustomer(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});

    return this.http.delete(`http://localhost:8080/users/${id}`, { headers: headers, responseType: 'text' });

  }


  // -------- Package ----------

  packageList() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});
    return this.http.get<pack[]>('http://localhost:8080/packages', { headers: headers });
  }



  getPackage(id: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});
    return this.http.get<pack>(`http://localhost:8080/packages/${id}`, { headers: headers });
  }

  createPackage(data: pack) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});
      return this.http.post<void>(BASE_URL + '/packages', data, {
      headers: headers,
    });
  }

  updatePackage(data: pack) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});
    const id = data.id;

    return this.http.put<void>(BASE_URL + `/packages/${id}`, data, {
      headers: headers,
      responseType: `${'text' as 'json'}`
    });
  }

  deletePackage(id: number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: `${token}`});

    return this.http.delete(`http://localhost:8080/packages/${id}`, { headers: headers, responseType: 'text' })

  }
}

























  // async deleteOrder(id: number) {
  //   // const token = localStorage.getItem('token');

  //   // const headers = new HttpHeaders({Authorization: `${token}`});
  //   //   return this.http.delete<void>(`http://localhost:8080/orders/${id}`, {headers: headers});
  //   // return this.http.delete(`http://localhost:8080/orders/${id}`, { responseType: 'text' })
  //   await firstValueFrom(this.http.delete<string>(`http://localhost:8080/orders/${id}`)).then(
  //     (response) => {
  //       const jsonResponse = JSON.parse(response);
  //       console.log(jsonResponse);
        
  //       return jsonResponse.message;
  //     }
  //   );
  // }