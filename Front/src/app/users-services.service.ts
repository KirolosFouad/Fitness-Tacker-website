import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    const url = 'http://localhost:5000/user';
    return this.http.get<any>(url);
  }

  postUsers(Users: any): Observable<any> {
    const url = 'http://localhost:5000/user';
    return this.http.post(url,Users);
  }

  // updateUsers({}): Observable<any> {
  //  const url = 'http://localhost:5000/user';
  //  return this.http.put(url,{});
  //}

  // delete({}): Observable<any> {
  //  const url = 'http://localhost:5000/user';
  //  return this.http.delete(url,{});
  //}


}
