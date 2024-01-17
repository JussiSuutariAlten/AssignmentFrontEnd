import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTicTacToeComponent } from './example-tic-tac-toe.component';

describe('ExampleTicTacToeComponent', () => {
  let component: ExampleTicTacToeComponent;
  let fixture: ComponentFixture<ExampleTicTacToeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleTicTacToeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleTicTacToeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
