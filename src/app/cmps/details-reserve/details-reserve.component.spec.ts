import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsReserveComponent } from './details-reserve.component';

describe('DetailsReserveComponent', () => {
  let component: DetailsReserveComponent;
  let fixture: ComponentFixture<DetailsReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsReserveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
