import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFuncionalityComponent } from './add-funcionality.component';

describe('AddFuncionalityComponent', () => {
  let component: AddFuncionalityComponent;
  let fixture: ComponentFixture<AddFuncionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFuncionalityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFuncionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
