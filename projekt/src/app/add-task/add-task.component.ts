import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../models/Task';
import { TaskService } from '../services/Task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  newTask: Task = new Task();
  constructor(private taskService: TaskService) {}
  @Output() taskAdded: EventEmitter<void> = new EventEmitter<void>();

  addTask(): void {
    this.taskService.addTask(this.newTask)
      .subscribe(()=>{
        this.newTask = new Task();

      
      })
  }

}
