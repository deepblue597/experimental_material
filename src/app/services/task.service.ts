import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http' ; 
import { TASKS } from '../mock-tasks';
import { Task } from '../Task' ; 

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl= 'http://localhost:5000/tasks' ; 
  constructor(private http:HttpClient) {}   //with this we should be able to use hhtp and all the methods we need 

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl) ;  
  }

}
