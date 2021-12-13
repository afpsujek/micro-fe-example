import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageElComponent } from './message-el.component';

describe('MessageElComponent', () => {
  let component: MessageElComponent;
  let fixture: ComponentFixture<MessageElComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageElComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
