import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryAndTweetsComponent } from './recovery-and-tweets.component';

describe('RecoveryAndTweetsComponent', () => {
  let component: RecoveryAndTweetsComponent;
  let fixture: ComponentFixture<RecoveryAndTweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveryAndTweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryAndTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
