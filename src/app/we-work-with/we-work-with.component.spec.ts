import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeWorkWithComponent } from './we-work-with.component';

describe('WeWorkWithComponent', () => {
  let component: WeWorkWithComponent;
  let fixture: ComponentFixture<WeWorkWithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeWorkWithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeWorkWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
