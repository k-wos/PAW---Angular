import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, switchMap } from 'rxjs';
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
    location.reload();
    functionality.status = 'todo';
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
  deleteTaskFromFunctionalities(taskId: number): Observable<any> {
    return this.getFunctionalities().pipe(
      switchMap((functionalities: Functionality[]) => {
        const updateObservables: Observable<any>[] = [];

        for (const functionality of functionalities) {
          if (functionality.tasks && functionality.tasks.some(task => task.id === taskId)) {
            functionality.tasks = functionality.tasks.filter(task => task.id !== taskId);
            updateObservables.push(this.updateFunctionality(functionality));
          }
        }

        return forkJoin(updateObservables);
      })
    );
  }
}
