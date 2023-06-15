import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, of, switchMap, throwError } from 'rxjs';
import { Task } from '../models/Task';
import { Functionality } from '../models/Functionality';
import { FunctionalityService } from './Functionality.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:3000/tasks';

constructor(private http: HttpClient, private functionalityService: FunctionalityService) { }

getTasks(): Observable<Task[]> {
  return this.http.get<Task[]>(this.baseUrl).pipe(
    switchMap((tasks: Task[]) => {
      const functionalityIds = tasks.map(task => task.functionalityId);
      const functionalityRequests = functionalityIds.map(id => id ? this.getFunctionality(id) : of(null));
      return forkJoin([of(tasks), ...functionalityRequests]);
    }),
    map(([tasks, ...functionalities]: [Task[], ...(Functionality | null)[]]) => {
      const mappedFunctionalities = functionalities.map(func => func ? func : undefined);
      return tasks.map((task, index) => {
        if (task.functionalityId) {
          task.functionality = mappedFunctionalities[index];
        }
        return task;
      });
    })
  );
}

public getFunctionality(id: number): Observable<Functionality> {
  const url = `http://localhost:3000/functionalities/${id}`;
  return this.http.get<Functionality>(url);
}


getTask(id: number): Observable<Task> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.get<Task>(url);
}



addTask(task: Task): Observable<any> {
  task.status = 'todo';
  const currentDate = new Date().toLocaleString();
  task.createdDate = currentDate;
  task.assignedUser = "John Doe";
  const functionalityId = task.functionalityId || 0; 
 
  
  return this.http.post(this.baseUrl, task).pipe(
    switchMap((response: any) => {
      if (response && response.id) {
        const taskId = response.id;
        
        return this.getFunctionality(functionalityId).pipe(
          switchMap((functionality: Functionality) => {
            if (functionality && functionality.tasks) {
              task.id = taskId; // Set the task id
              functionality.tasks.push(task);
            } else {
              functionality.tasks = [{ ...task, id: taskId }]; 
            }
            
            return this.functionalityService.updateFunctionality(functionality);
          })
        );
      } else {
        return throwError('Nie udało się dodać zadania.');
      }
    })
  );
}

updateTask(task: Task): Observable<any> {
  const url = `${this.baseUrl}/${task.id}`;
  return this.http.put(url, task);
}

deleteTask(id: number): Observable<any> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.delete(url).pipe(
    switchMap(() => this.functionalityService.deleteTaskFromFunctionalities(id))
  );
}

}
