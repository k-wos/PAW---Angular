import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueBoxComponent } from './revenue-box.component';

describe('RevenueBoxComponent', () => {
  let component: RevenueBoxComponent;
  let fixture: ComponentFixture<RevenueBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenueBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
