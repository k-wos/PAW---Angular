import { Component, OnInit } from '@angular/core';
import { Functionality } from '../models/Functionality';
import { FunctionalityService } from '../services/Functionality.service';

@Component({
  selector: 'app-functionality-list',
  templateUrl: './functionality-list.component.html',
  styleUrls: ['./functionality-list.component.scss']
})
export class FunctionalityListComponent implements OnInit {
  functionalities: Functionality[] = [];
  selectedFunctionality: Functionality | null = null;

  newFunctionality: Functionality = new Functionality();

  constructor(private functionalityService: FunctionalityService) { }

  ngOnInit(): void {
    this.getFunctionalities();
  }

  getFunctionalities(): void {
    this.functionalityService.getFunctionalities()
      .subscribe((data: Functionality[]) => {
        this.functionalities = data;
      });
  }

  addFunctionality(functionality: Functionality): void {
    this.functionalityService.addFunctionality(functionality)
      .subscribe(() => {
        this.getFunctionalities();
        this.newFunctionality = new Functionality(); // Reset the newFunctionality object
      });
  }

  updateFunctionality(functionality: Functionality): void {
    this.functionalityService.updateFunctionality(functionality)
      .subscribe(() => {
        this.getFunctionalities();
        this.selectedFunctionality = null; // Reset the selectedFunctionality object
      });
  }
  

  deleteFunctionality(functionalityId: number | undefined): void {
    if (functionalityId !== undefined) {
      this.functionalityService.deleteFunctionality(functionalityId).subscribe(
        () => {
          this.functionalities = this.functionalities.filter(f => f.id !== functionalityId);
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  editFunctionality(functionality: Functionality): void {
    this.selectedFunctionality = functionality; // Set the selectedFunctionality object
  }

  closeEditForm(): void {
    location.reload();
    this.selectedFunctionality = null; // Reset the selectedFunctionality object when the form is closed
  }
}
