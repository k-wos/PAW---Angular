import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/Task';
import { TaskService } from '../services/Task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {
  @Input() task!: Task;
  @Output() closeForm = new EventEmitter<void>();
  @Output() saveTask = new EventEmitter<Task>();


  constructor(private taskService: TaskService){}

  onSave(): void{
    this.taskService.updateTask(this.task)
      .subscribe((updatedTask: Task) =>{
        this.saveTask.emit(updatedTask);
        this.closeForm.emit();
      });
  }

  onCancel(): void{
    this.closeForm.emit();
  }

}
