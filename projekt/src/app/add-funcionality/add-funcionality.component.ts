import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Functionality } from '../models/Functionality';
import { FunctionalityService } from '../services/Functionality.service';

@Component({
  selector: 'app-add-funcionality',
  templateUrl: './add-funcionality.component.html',
  styleUrls: ['./add-funcionality.component.scss']
})
export class AddFuncionalityComponent {
  @Input() refreshFunctionalities!: () => void;
  newFunctionality: Functionality = new Functionality();

  constructor(private functionalityService: FunctionalityService) { }

  @Output() functionalityAdded: EventEmitter<void> = new EventEmitter<void>();

  addFunctionality(): void {
    this.functionalityService.addFunctionality(this.newFunctionality)
      .subscribe(() => {
        this.newFunctionality = new Functionality();
        this.refreshFunctionalities();
      });
  }
}
