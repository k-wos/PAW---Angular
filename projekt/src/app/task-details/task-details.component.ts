import { Component, Inject } from '@angular/core';
import { Task } from '../models/Task';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {
  task: Task | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) private data: Task) { }

  ngOnInit(): void {
    this.task = this.data;
  }
}
