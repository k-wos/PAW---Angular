import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medium-chart',
  templateUrl: './medium-chart.component.html',
  styleUrls: ['./medium-chart.component.scss']
})
export class MediumChartComponent implements OnInit {
  @Input() chartList: any = [];
  ngOnInit() {}
}
