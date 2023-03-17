import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumChartComponent } from './medium-chart.component';

describe('MediumChartComponent', () => {
  let component: MediumChartComponent;
  let fixture: ComponentFixture<MediumChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
