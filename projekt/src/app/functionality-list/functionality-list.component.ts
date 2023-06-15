import { Component, OnInit } from '@angular/core';
import { Functionality } from '../models/Functionality';
import { FunctionalityService } from '../services/Functionality.service';
import { FunctionalityDetailsComponent } from '../functionality-details/functionality-details.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-functionality-list',
  templateUrl: './functionality-list.component.html',
  styleUrls: ['./functionality-list.component.scss']
})
export class FunctionalityListComponent implements OnInit {
  functionalities: Functionality[] = [];
  selectedFunctionality: Functionality | null = null;

  newFunctionality: Functionality = new Functionality();

  constructor(private functionalityService: FunctionalityService, private dialog: MatDialog) { }

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
        this.newFunctionality = new Functionality(); 
      });
  }

  updateFunctionality(functionality: Functionality): void {
    this.functionalityService.updateFunctionality(functionality)
      .subscribe(() => {
        this.getFunctionalities();
        this.selectedFunctionality = null; 
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
    this.selectedFunctionality = functionality; 
  }

  closeEditForm(): void {
    location.reload();
    this.selectedFunctionality = null; 
  }

  showDetails(functionality: Functionality): void {
     const dialogRef = this.dialog.open(FunctionalityDetailsComponent, {
    width: '400px',
    data: functionality,
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog został zamknięty');
  });
  }
}
