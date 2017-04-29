import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Polymer Modules
import { PolymerModule } from '@codebakery/origami';
import { AppElementsModule, PaperElementsModule, IronElementsModule } from '@codebakery/origami/lib/collections';

import { AppComponent } from './app.component';
import { TodoBoxComponent } from './todo-box/todo-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoBoxComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //Polymer Modules
    AppElementsModule,
    PaperElementsModule,
    IronElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
