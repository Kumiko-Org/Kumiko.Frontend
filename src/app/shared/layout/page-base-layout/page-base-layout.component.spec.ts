import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBaseLayoutComponent } from './page-base-layout.component';

describe('PageBaseLayoutComponent', () => {
  let component: PageBaseLayoutComponent;
  let fixture: ComponentFixture<PageBaseLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBaseLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBaseLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
