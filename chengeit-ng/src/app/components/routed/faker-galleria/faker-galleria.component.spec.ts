import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakerGalleriaComponent } from './faker-galleria.component';

describe('FakerGalleriaComponent', () => {
  let component: FakerGalleriaComponent;
  let fixture: ComponentFixture<FakerGalleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakerGalleriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakerGalleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
