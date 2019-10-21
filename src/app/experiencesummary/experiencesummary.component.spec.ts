import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesummaryComponent } from './experiencesummary.component';

describe('ExperiencesummaryComponent', () => {
  let component: ExperiencesummaryComponent;
  let fixture: ComponentFixture<ExperiencesummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiencesummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
