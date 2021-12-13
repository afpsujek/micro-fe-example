import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddElComponent } from './add-el.component';

describe('AddElComponent', () => {
  let component: AddElComponent;
  let fixture: ComponentFixture<AddElComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddElComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
