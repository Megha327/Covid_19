import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadAndUpdatesComponent } from './spread-and-updates.component';

describe('SpreadAndUpdatesComponent', () => {
  let component: SpreadAndUpdatesComponent;
  let fixture: ComponentFixture<SpreadAndUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadAndUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadAndUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
