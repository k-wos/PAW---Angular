import { Component } from '@angular/core';
import { Colors } from 'src/helpers/enum';

@Component({
  selector: 'app-sales-country',
  templateUrl: './sales-country.component.html',
  styleUrls: ['./sales-country.component.scss'],
})
export class SalesCountryComponent {
  salesCountryCharts = [
    { country: 'Russia', sum: '$829,910 of $1M', color: Colors.Violet },
    { country: 'Australia', sum: '$293,792 of $1M', color: Colors.Green },
    { country: 'Algeria', sum: '$128,603 of $1M', color: Colors.Red },
    { country: 'China', sum: '$98,321 of $1M', color: Colors.Yellow },
    { country: 'United States', sum: '$190,500 of $1M', color: Colors.Orange },
  ];
}
