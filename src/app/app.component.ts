import {
  Component,
  Type,
  ViewChild,
  ViewContainerRef,
  inject,
  signal,
} from '@angular/core';
import { ExampleFormComponent } from './components/example-form/example-form.component';
import { DialogComponent } from './components/Dialog/dialog.component';
import { ExampleTextComponent } from './components/example-text/example-text.component';
import { ExampleFormService } from './services/example-form.service';
import { ExampleTransformComponent } from './components/example-transform/example-transform/example-transform.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('vcr', { static: true, read: ViewContainerRef })
  vcr!: ViewContainerRef;
  testSignal = signal('jahuu');

  title = 'assignment-fe';
  formService = inject(ExampleFormService);
  formValueSignal = this.formService.testSignal;

  private openDialog(component: Type<any>, title: string): void {
    this.vcr.clear();
    const dialog = this.vcr.createComponent(DialogComponent);
    dialog.setInput('childComponent', component);
    dialog.setInput('title', title);
  }

  openTextDialog(): void {
    this.openDialog(ExampleTextComponent, 'Text Component');
  }

  openFormDialog(): void {
    this.openDialog(ExampleFormComponent, 'Form Component');
  }
  openTransformDialog(): void {
    this.openDialog(ExampleTransformComponent, 'Game Component');
  }
}
