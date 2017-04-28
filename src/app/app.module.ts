import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Polymer Modules
import { PolymerModule } from '@codebakery/origami';
import { AppElementsModule } from '@codebakery/origami/lib/collections';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //Polymer Modules
    AppElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
