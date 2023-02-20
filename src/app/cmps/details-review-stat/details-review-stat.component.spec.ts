import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsReviewStatComponent } from './details-review-stat.component';

describe('DetailsReviewStatComponent', () => {
  let component: DetailsReviewStatComponent;
  let fixture: ComponentFixture<DetailsReviewStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsReviewStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsReviewStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
