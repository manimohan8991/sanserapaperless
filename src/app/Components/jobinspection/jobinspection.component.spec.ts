import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobinspectionComponent } from './jobinspection.component';

describe('JobinspectionComponent', () => {
  let component: JobinspectionComponent;
  let fixture: ComponentFixture<JobinspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobinspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobinspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
