import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsReviewPreviewComponent } from './details-review-preview.component';

describe('DetailsReviewPreviewComponent', () => {
  let component: DetailsReviewPreviewComponent;
  let fixture: ComponentFixture<DetailsReviewPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsReviewPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsReviewPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
