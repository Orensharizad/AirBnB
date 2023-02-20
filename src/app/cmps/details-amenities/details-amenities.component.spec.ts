import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAmenitiesComponent } from './details-amenities.component';

describe('DetailsAmenitiesComponent', () => {
  let component: DetailsAmenitiesComponent;
  let fixture: ComponentFixture<DetailsAmenitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAmenitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
