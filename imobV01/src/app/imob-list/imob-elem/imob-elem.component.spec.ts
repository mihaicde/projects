import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImobElemComponent } from './imob-elem.component';

describe('ImobElemComponent', () => {
  let component: ImobElemComponent;
  let fixture: ComponentFixture<ImobElemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImobElemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImobElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
