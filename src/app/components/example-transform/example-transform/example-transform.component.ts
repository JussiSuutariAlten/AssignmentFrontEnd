import { Component, inject } from '@angular/core';
import { BandData, TransformedBandData } from '../../../models/BandData.types';
import { TransformBandService } from '../../../services/transform-band.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example-transform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './example-transform.component.html',
  styleUrl: './example-transform.component.css',
})
export class ExampleTransformComponent {
  //This is kinda funny that New angular control flow syntax does not have JS Object.
  // Old <div *ngFor syntax had it.
  // So here is just create JSObject and new control flow syntax sees it :D
  JSobject = Object;
  transformService = inject(TransformBandService);

  defaultBandData = {
    members: {
      current: [
        {
          name: 'Sascha',
          age: 59,
          plays: ['vocals', 'synth', 'guitar', 'bass'],
        },
        { name: 'Lucia', age: 49, plays: ['vocals', 'synth'] },
        { name: 'Jules', age: 53, plays: ['guitar', 'bass', 'synth'] },
        { name: 'Steve', age: 55, plays: ['guitar'] },
      ],
      past: [
        { name: 'Raymond', age: 57, plays: ['vocals', 'synth'] },
        { name: 'En', age: 52, plays: ['vocals', 'drums', 'guitar', 'synth'] },
        { name: 'Gunter', age: 57, plays: ['guitar', 'synth'] },
      ],
    },
  } as BandData;

  inputBandData = JSON.stringify(this.defaultBandData);
  transFormedBandData!: TransformedBandData;

  pressTransform() {
    const transFormedBandData = this.transformService.TransFormBandData(
      structuredClone(this.defaultBandData)
    );
    this.transFormedBandData = transFormedBandData;
  }
}
