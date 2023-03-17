import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCountryComponent } from './sales-country.component';

describe('SalesCountryComponent', () => {
  let component: SalesCountryComponent;
  let fixture: ComponentFixture<SalesCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
