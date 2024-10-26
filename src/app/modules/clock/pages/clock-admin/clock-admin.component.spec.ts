import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockAdminComponent } from './clock-admin.component';

describe('ClockAdminComponent', () => {
  let component: ClockAdminComponent;
  let fixture: ComponentFixture<ClockAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClockAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClockAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
