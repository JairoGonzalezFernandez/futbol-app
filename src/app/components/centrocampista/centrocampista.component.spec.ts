import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrocampistaComponent } from './centrocampista.component';

describe('CentrocampistaComponent', () => {
  let component: CentrocampistaComponent;
  let fixture: ComponentFixture<CentrocampistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentrocampistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrocampistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
