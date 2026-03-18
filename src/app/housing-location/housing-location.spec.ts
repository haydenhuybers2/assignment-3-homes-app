import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HousingLocation } from './housing-location';
import { routes } from '../app.routes';
import { HousingLocationInfo } from '../housinglocationinfo';

const testHousingLocation: HousingLocationInfo = {
  id: 1,
  name: 'Test Home',
  city: 'Test City',
  state: 'TS',
  photo: 'https://example.com/home.jpg',
  availableUnits: 1,
  wifi: true,
  laundry: false,
};

describe('HousingLocation', () => {
  let component: HousingLocation;
  let fixture: ComponentFixture<HousingLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLocation],
      providers: [provideRouter(routes)],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingLocation);
    fixture.componentRef.setInput('housingLocation', testHousingLocation);
    fixture.detectChanges();
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
