import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//AngularFire2
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';

// Polymer
import { PolymerModule } from '@codebakery/origami';
import { AppElementsModule, PaperElementsModule, IronElementsModule } from '@codebakery/origami/lib/collections';

//Components
import { AppComponent } from './app.component';
import { TodoBoxComponent } from './todo-box/todo-box.component';

//providers
import { AuthService } from './providers/auth.service';

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
    IronElementsModule,
    //firebase
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ AuthService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
