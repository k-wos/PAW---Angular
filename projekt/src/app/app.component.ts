import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projekt';
  showFunctionalityList(): void {
    // Możesz wykonać tutaj odpowiednie operacje, np. ustawienie flagi lub nawigację do komponentu FunctionalityListComponent
  }

  showTasksList(): void {
    // Możesz wykonać tutaj odpowiednie operacje, np. ustawienie flagi lub nawigację do komponentu TasksListComponent
  }
}
