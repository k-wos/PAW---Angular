import { Component } from '@angular/core';
import { Task } from '../models/Task';
import { TaskService } from '../services/Task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }
  deleteTask(id: number | undefined): void {
    if (id !== undefined) {
    this.taskService.deleteTask(id).subscribe(() => {
     
      console.log('Zadanie zostało usunięte');
      
      this.getTasks();
    })
  }
}
}
