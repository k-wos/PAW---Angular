import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Functionality } from '../models/Functionality';
import * as  json from  '../../../db.json'

@Injectable({
  providedIn: 'root'
})
export class FunctionalityService {
  private baseUrl = 'http://localhost:3000/functionalities';
  private projectUrl = 'http://localhost:3000/projects'

  constructor(private http: HttpClient) { }

  getFunctionalities(): Observable<Functionality[]> {
    return this.http.get<Functionality[]>(this.baseUrl);
  }

  addFunctionality(functionality: Functionality): Observable<any> {
    return this.http.post(this.baseUrl, functionality);
  }

  updateFunctionality(updatedFunctionality: Functionality): Observable<any> {
    const url = `${this.baseUrl}/${updatedFunctionality.id}`;
    return this.http.put(url, updatedFunctionality);
  }

  deleteFunctionality(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
