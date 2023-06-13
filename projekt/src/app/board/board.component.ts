import { Component } from '@angular/core';
import { Functionality } from '../models/Functionality';
import { FunctionalityService } from '../services/Functionality.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  functionalities: Functionality[] = [];
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
 

 

  
}
