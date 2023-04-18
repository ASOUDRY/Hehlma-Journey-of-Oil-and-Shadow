import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestEncounterComponent } from './quest-encounter.component';

describe('QuestEncounterComponent', () => {
  let component: QuestEncounterComponent;
  let fixture: ComponentFixture<QuestEncounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestEncounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestEncounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
