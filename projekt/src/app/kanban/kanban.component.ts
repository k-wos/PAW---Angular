import { Component } from '@angular/core';
import { Task } from '../models/Task';
import { TaskService } from '../services/Task.service';
import { KanbanColumn } from './kanban-colum.interface';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})

export class KanbanComponent {
  
  kanbanColumns: KanbanColumn[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.kanbanColumns = this.generateKanbanColumns(tasks);
    });
  }

  private generateKanbanColumns(tasks: Task[]): KanbanColumn[] {
    const kanbanColumns: KanbanColumn[] = [
      { status: 'todo', tasks: [] },
      { status: 'doing', tasks: [] },
      { status: 'done', tasks: [] }
    ];

    tasks.forEach(task => {
      if (task.status === 'todo') {
        kanbanColumns[0].tasks.push(task);
      } else if (task.status === 'doing') {
        kanbanColumns[1].tasks.push(task);
      } else if (task.status === 'done') {
        kanbanColumns[2].tasks.push(task);
      }
    });
    console.log();
    return kanbanColumns;
  }
  moveTask(task: Task, targetStatus: string): void {
    task.status = targetStatus;
    this.taskService.updateTask(task).subscribe(() => {
      console.log('Zadanie zostało przeniesione');
      this.taskService.getTasks();
    });
  }
}
