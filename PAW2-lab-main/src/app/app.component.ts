import { Component, Input } from '@angular/core';
import { Colors } from 'src/helpers/enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  revenues = [
    {
      icon: '../../assets/bag.png',
      sum: '$50,000',
      text: 'Total revenue',
      color: Colors.Green,
    },
    {
      icon: '../../assets/basket.png',
      sum: '$1,250',
      text: 'Revenue',
      color: Colors.Violet,
    },
  ];

  mediumCharts = [
    {
      title: 'Total Earning',
      number: '$39K',
      changePercent: '13,8%',
      increase: false,
    },
    {
      title: 'Products Sold',
      number: '2453',
      changePercent: '13,8%',
      increase: true,
    },
  ];
}
