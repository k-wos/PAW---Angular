import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:3000/tasks';

constructor(private http: HttpClient) { }

getTasks(): Observable<Task[]> {
  return this.http.get<Task[]>(this.baseUrl);
}

getTask(id: number): Observable<Task> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.get<Task>(url);
}

addTask(task: Task): Observable<any> {
  return this.http.post(this.baseUrl, task);
}

updateTask(task: Task): Observable<any> {
  const url = `${this.baseUrl}/${task.id}`;
  return this.http.put(url, task);
}

deleteTask(id: number): Observable<any> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.delete(url);
}
}
