import { Component } from '@angular/core';
import { Task } from '../models/Task';
import { TaskService } from '../services/Task.service';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private dialog: MatDialog) { }

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
showDetails(): void {
  const dialogRef = this.dialog.open(TaskDetailsComponent, {
    width: '400px',
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog został zamknięty');
  });
}

}
