
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { MouseObservableComponent } from './mouse-observable/mouse-observable.component';


@NgModule({
  declarations: [
    AppComponent,
    MouseObservableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
