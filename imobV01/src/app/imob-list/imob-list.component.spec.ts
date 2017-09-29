import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImobListComponent } from './imob-list.component';

describe('ImobListComponent', () => {
  let component: ImobListComponent;
  let fixture: ComponentFixture<ImobListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImobListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
