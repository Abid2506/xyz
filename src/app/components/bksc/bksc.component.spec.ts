import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BkscComponent } from './bksc.component';

describe('BkscComponent', () => {
  let component: BkscComponent;
  let fixture: ComponentFixture<BkscComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BkscComponent]
    });
    fixture = TestBed.createComponent(BkscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
