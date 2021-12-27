import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessdataComponent } from './processdata.component';

describe('ProcessdataComponent', () => {
  let component: ProcessdataComponent;
  let fixture: ComponentFixture<ProcessdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
