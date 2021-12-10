import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayComponentComponent } from './twoway-component.component';

describe('TwowayComponentComponent', () => {
  let component: TwowayComponentComponent;
  let fixture: ComponentFixture<TwowayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwowayComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
