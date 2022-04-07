import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http' ; 
import { Observable, of } from 'rxjs'; 
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl= 'http://localhost:5000/users' ; 
  constructor(private http:HttpClient) {}   //with this we should be able to use hhtp and all the methods we need 

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl) ;  
  }
}
