import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExampleFormService {
  testSignal = signal('');
  constructor() {}
}
