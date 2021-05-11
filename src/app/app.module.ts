import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC7OpIMGoiT3fv7Hp8GdU95w9mF6ZlvJmc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
