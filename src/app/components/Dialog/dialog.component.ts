import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  @ViewChild('dialogViewRef', { static: true, read: ViewContainerRef })
  dialogViewRef!: ViewContainerRef;

  @Input()
  childComponent!: Type<any>;

  @Input()
  title = 'Default Title';
  titleSignal = signal(this.title);

  @ViewChild('dialog')
  dialog!: ElementRef;

  constructor() {}
  ngOnInit(): void {
    const childComponentRef = this.dialogViewRef.createComponent(
      this.childComponent
    );
    if (childComponentRef.instance.closeDialog) {
      childComponentRef.instance.closeDialog.subscribe(() => {
        this.closeDialog();
      });
    }
    if (childComponentRef.instance.outPutToDialog) {
      childComponentRef.instance.outPutToDialog.subscribe((title: string) => {
        this.titleSignal.set(title);
      });
    }
  }

  pressCloseButton() {
    this.closeDialog();
  }

  private closeDialog() {
    this.dialog.nativeElement.close();
  }
}
