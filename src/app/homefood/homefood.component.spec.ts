import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomefoodComponent } from './homefood.component';

describe('HomefoodComponent', () => {
  let component: HomefoodComponent;
  let fixture: ComponentFixture<HomefoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomefoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomefoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
