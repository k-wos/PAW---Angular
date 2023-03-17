import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-revenue-box',
  templateUrl: './revenue-box.component.html',
  styleUrls: ['./revenue-box.component.scss'],
})
export class RevenueBoxComponent implements OnInit {
  @Input() revenueList: any = [];
  ngOnInit() {}
}
