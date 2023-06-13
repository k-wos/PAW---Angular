import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Functionality } from '../models/Functionality';
import { FunctionalityService } from '../services/Functionality.service';

@Component({
  selector: 'app-edit-functionality',
  templateUrl: './edit-functionality.component.html',
  styleUrls: ['./edit-functionality.component.scss']
})
export class EditFunctionalityComponent {
  @Input() functionality!: Functionality;
  @Output() closeForm = new EventEmitter<void>();
  @Output() saveFunctionality = new EventEmitter<Functionality>();

  constructor(private functionalityService: FunctionalityService) { }

  onSave(): void {
    this.functionalityService.updateFunctionality(this.functionality)
      .subscribe((updatedFunctionality: Functionality) => {
        this.saveFunctionality.emit(updatedFunctionality); // Emit the updated functionality to the parent component
        this.closeForm.emit(); // Emit an event to close the form
      });
  }

  onCancel(): void {
    this.closeForm.emit(); // Emit an event to close the form without saving
  }
}
