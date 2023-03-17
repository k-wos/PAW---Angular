import { Component, Input, OnInit } from '@angular/core';
import { Colors } from 'src/helpers/enum';

@Component({
  selector: 'app-sales-country-chart',
  templateUrl: './sales-country-chart.component.html',
  styleUrls: ['./sales-country-chart.component.scss'],
})
export class SalesCountryChartComponent implements OnInit {
  @Input() countryChartList: any = [];
  colorsEnum: typeof Colors = Colors;
  ngOnInit() {}
}
