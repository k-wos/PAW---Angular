import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCountryChartComponent } from './sales-country-chart.component';

describe('SalesCountryChartComponent', () => {
  let component: SalesCountryChartComponent;
  let fixture: ComponentFixture<SalesCountryChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesCountryChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesCountryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
