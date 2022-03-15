import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelanteroComponent } from './delantero.component';

describe('DelanteroComponent', () => {
  let component: DelanteroComponent;
  let fixture: ComponentFixture<DelanteroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelanteroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelanteroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
