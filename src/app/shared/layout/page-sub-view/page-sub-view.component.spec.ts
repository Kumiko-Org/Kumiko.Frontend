import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSubViewComponent } from './page-sub-view.component';

describe('PageSubViewComponent', () => {
  let component: PageSubViewComponent;
  let fixture: ComponentFixture<PageSubViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSubViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSubViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
