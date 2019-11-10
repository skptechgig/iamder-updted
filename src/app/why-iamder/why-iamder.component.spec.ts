import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyIamderComponent } from './why-iamder.component';

describe('WhyIamderComponent', () => {
  let component: WhyIamderComponent;
  let fixture: ComponentFixture<WhyIamderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyIamderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyIamderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
