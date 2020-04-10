import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryAndMapComponent } from './country-and-map.component';

describe('CountryAndMapComponent', () => {
  let component: CountryAndMapComponent;
  let fixture: ComponentFixture<CountryAndMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryAndMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryAndMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
