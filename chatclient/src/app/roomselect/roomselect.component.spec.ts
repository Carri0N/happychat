import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomselectComponent } from './roomselect.component';

describe('RoomselectComponent', () => {
  let component: RoomselectComponent;
  let fixture: ComponentFixture<RoomselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
