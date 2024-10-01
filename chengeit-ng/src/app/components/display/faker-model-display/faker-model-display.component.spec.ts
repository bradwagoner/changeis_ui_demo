import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakerModelDisplayComponent } from './faker-model-display.component';

describe('FakerModelDisplayComponent', () => {
  let component: FakerModelDisplayComponent;
  let fixture: ComponentFixture<FakerModelDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakerModelDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakerModelDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
