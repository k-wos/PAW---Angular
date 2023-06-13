import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunctionalityListComponent } from './functionality-list/functionality-list.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  { path: 'functionality', component: FunctionalityListComponent },
  { path: 'tasks', component: TasksComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
