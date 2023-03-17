import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  @Input() list: any
  @Output() selectedBeer = new EventEmitter()

  constructor() {}

  ngOnInit(): void {
  }
  protected onBeerSelect(beer: any) {
    this.selectedBeer.emit(beer)
  }
}
