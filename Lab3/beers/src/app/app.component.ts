import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BeerApiService } from './beer-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  protected beerList: any
  protected selectedBeer: any
  constructor(private beerApi: BeerApiService) {}

  ngOnInit(): void {
   this.beerApi.getBeers().subscribe(d => this.beerList = d)
  }
  onBeerSelected(beer: any) {
    this.selectedBeer = beer
  }
}
