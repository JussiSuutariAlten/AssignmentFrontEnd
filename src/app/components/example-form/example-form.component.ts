import {
  Component,
  Input,
  OnInit,
  Signal,
  signal,
  inject,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { ExampleFormService } from './../../services/example-form.service';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.css'],
})
export class ExampleFormComponent {
  @Output() closeDialog = new EventEmitter();
  @Output() outPutToDialog = new EventEmitter();

  inputNameValue = '';
  inputTitleValue = '';

  service = inject(ExampleFormService);
  constructor() {}

  pressSubmit(): void {
    this.service.testSignal.set(this.inputNameValue);
    this.closeDialog.emit();
  }
  pressOutPutToDialog(): void {
    this.outPutToDialog.emit(this.inputTitleValue);
  }
}
