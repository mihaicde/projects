import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImobComponent } from './imob.component';

describe('ImobComponent', () => {
  let component: ImobComponent;
  let fixture: ComponentFixture<ImobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
