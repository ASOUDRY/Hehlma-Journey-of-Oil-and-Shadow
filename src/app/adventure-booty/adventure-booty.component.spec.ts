import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureBootyComponent } from './adventure-booty.component';

describe('AdventureBootyComponent', () => {
  let component: AdventureBootyComponent;
  let fixture: ComponentFixture<AdventureBootyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventureBootyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdventureBootyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
