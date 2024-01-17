import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { Component, EventEmitter, Output } from '@angular/core';
const DUMMY_CONTENT = 'Dummy TEXT';

@Component({
  selector: 'app-dummy-component',
  template: `<p>${DUMMY_CONTENT}</p>
    <button id="submit" (click)="submitButton()">Submit</button>`,
})
class DummyComponent {
  @Output() closeDialog = new EventEmitter();

  submitButton() {
    this.closeDialog.emit();
  }
}

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [DialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    component.childComponent = DummyComponent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dialog should be open', () => {
    expect(fixture.nativeElement.querySelector('dialog').open).toBe(true);
  });

  it('should have title default Title', () => {
    const headerElement = fixture.nativeElement.querySelector('h3');
    expect(headerElement.textContent).toContain('Default');
  });

  it('should render Dummy Content', () => {
    const pTag = fixture.nativeElement.querySelector('p');
    expect(pTag.textContent).toContain(DUMMY_CONTENT);
  });

  it('Header close button should close dialog ', () => {
    const closeButton = fixture.nativeElement.querySelector('#close');
    closeButton.click();
    expect(fixture.nativeElement.querySelector('dialog').open).toBe(false);
  });

  it('Dummy Component submit button should close dialog ', () => {
    const closeButton = fixture.nativeElement.querySelector('#submit');
    closeButton.click();
    expect(fixture.nativeElement.querySelector('dialog').open).toBe(false);
  });
});
