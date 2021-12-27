import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SselectjobComponent } from './sselectjob.component';

describe('SselectjobComponent', () => {
  let component: SselectjobComponent;
  let fixture: ComponentFixture<SselectjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SselectjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SselectjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
