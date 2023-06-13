import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { HeaderComponent } from './header/header.component';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { FunctionalityListComponent } from './functionality-list/functionality-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditFunctionalityComponent } from './edit-functionality/edit-functionality.component';
import { AddFuncionalityComponent } from './add-funcionality/add-funcionality.component';
import { AppRoutingModule } from './app-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { KanbanComponent } from './kanban/kanban.component';




@NgModule({
  declarations: [	
    AppComponent,
    BoardComponent,
      HeaderComponent,
      AsideNavComponent,
      ProjectListComponent,
      FunctionalityListComponent,
      EditFunctionalityComponent,
      AddFuncionalityComponent,
      TasksComponent,
      AddTaskComponent,
      KanbanComponent,
      
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,  
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
