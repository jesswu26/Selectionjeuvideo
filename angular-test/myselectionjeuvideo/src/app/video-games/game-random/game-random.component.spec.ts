import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRandomComponent } from './game-random.component';

describe('GameRandomComponent', () => {
  let component: GameRandomComponent;
  let fixture: ComponentFixture<GameRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameRandomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
