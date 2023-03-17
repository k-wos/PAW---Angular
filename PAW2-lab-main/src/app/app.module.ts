import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { RevenueBoxComponent } from './revenue-box/revenue-box.component';
import { MediumChartComponent } from './medium-chart/medium-chart.component';
import { SalesCountryComponent } from './sales-country/sales-country.component';
import { SalesCountryChartComponent } from './sales-country-chart/sales-country-chart.component';
import { NetIncomeComponent } from './net-income/net-income.component';
import { TopProductsComponent } from './top-products/top-products.component';
import { ProductComponentComponent } from './product-component/product-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponentComponent,
    RevenueBoxComponent,
    MediumChartComponent,
    SalesCountryComponent,
    SalesCountryChartComponent,
    NetIncomeComponent,
    TopProductsComponent,
    ProductComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
