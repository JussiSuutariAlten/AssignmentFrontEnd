import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './components/Dialog/dialog.component';
import { ExampleTextComponent } from './components/example-text/example-text.component';
import { ExampleFormComponent } from './components/example-form/example-form.component';
import { ExampleTicTacToeComponent } from './components/example-tic-tac-toe/example-tic-tac-toe.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ExampleTextComponent,
    ExampleFormComponent,
    ExampleTicTacToeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
