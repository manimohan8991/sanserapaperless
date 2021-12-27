import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsetupComponent } from './jobsetup.component';

describe('JobsetupComponent', () => {
  let component: JobsetupComponent;
  let fixture: ComponentFixture<JobsetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
