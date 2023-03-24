import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCssComponent } from './check-css.component';

describe('CheckCssComponent', () => {
  let component: CheckCssComponent;
  let fixture: ComponentFixture<CheckCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckCssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
