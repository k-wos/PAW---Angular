import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunctionalityListComponent } from './functionality-list/functionality-list.component';
import { TasksComponent } from './tasks/tasks.component';
import { KanbanComponent } from './kanban/kanban.component';

const routes: Routes = [
  { path: '', component: FunctionalityListComponent },
  { path: 'functionality', component: FunctionalityListComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'kanban', component: KanbanComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
