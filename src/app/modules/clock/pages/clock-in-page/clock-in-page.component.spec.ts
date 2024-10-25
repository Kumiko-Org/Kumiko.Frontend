import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockInPageComponent } from './clock-in-page.component';

describe('ClockInPageComponent', () => {
  let component: ClockInPageComponent;
  let fixture: ComponentFixture<ClockInPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClockInPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClockInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
