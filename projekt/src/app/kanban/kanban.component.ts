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
  moveTask(task: Task, currentStatus: string, direction: 'previous' | 'next'): void {
    const currentIndex = this.kanbanColumns.findIndex(column => column.status === currentStatus);
    let targetIndex: number | undefined;
  
    if (direction === 'previous') {
      targetIndex = currentIndex - 1;
    } else if (direction === 'next') {
      targetIndex = currentIndex + 1;
    }
  
    if (targetIndex !== undefined && targetIndex >= 0 && targetIndex < this.kanbanColumns.length) {
      const targetColumn = this.kanbanColumns[targetIndex];
      const taskIndex = targetColumn.tasks.findIndex(t => t.id === task.id);
  
      if (taskIndex === -1) {
        
        const currentColumn = this.kanbanColumns[currentIndex];
        const taskIndexInCurrentColumn = currentColumn.tasks.findIndex(t => t.id === task.id);
        currentColumn.tasks.splice(taskIndexInCurrentColumn, 1);
  
        
        task.status = targetColumn.status;
  
        
        targetColumn.tasks.push(task);
  
        
        this.taskService.updateTask(task).subscribe(() => {
          console.log('Task updated successfully');
        }, error => {
          console.error('Error updating task:', error);
          
          currentColumn.tasks.splice(taskIndexInCurrentColumn, 0, task);
          task.status = currentColumn.status;
          targetColumn.tasks.splice(taskIndex, 1);
        });
      }
    }
  }
  
}
