import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { ConcatPipe } from './comp/concat.pipe';
import { ChildfruitComponent } from './childfruit/childfruit.component';


@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    ConcatPipe,
    ChildfruitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
