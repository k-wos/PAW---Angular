import { Component, Inject } from '@angular/core';
import { Functionality } from '../models/Functionality';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-functionality-details',
  templateUrl: './functionality-details.component.html',
  styleUrls: ['./functionality-details.component.scss']
})
export class FunctionalityDetailsComponent {
  functionality: Functionality | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) private data: Functionality) { }

  ngOnInit(): void {
    this.functionality = this.data;
  }
}
