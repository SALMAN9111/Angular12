import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringApiComponent } from './spring-api.component';

describe('SpringApiComponent', () => {
  let component: SpringApiComponent;
  let fixture: ComponentFixture<SpringApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
