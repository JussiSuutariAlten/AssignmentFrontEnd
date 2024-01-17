import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTransformComponent } from './example-transform.component';

describe('ExampleTransformComponent', () => {
  let component: ExampleTransformComponent;
  let fixture: ComponentFixture<ExampleTransformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleTransformComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleTransformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
