import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { HeaderComponent } from './header/header.component';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { FunctionalityListComponent } from './functionality-list/functionality-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditFunctionalityComponent } from './edit-functionality/edit-functionality.component';

@NgModule({
  declarations: [	
    AppComponent,
    BoardComponent,
      HeaderComponent,
      AsideNavComponent,
      ProjectListComponent,
      FunctionalityListComponent,
      EditFunctionalityComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
