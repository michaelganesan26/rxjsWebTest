
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { MouseObservableComponent } from './mouse-observable/mouse-observable.component';
import { ButtonObservableComponent } from './button-observable/button-observable.component';


@NgModule({
  declarations: [
    AppComponent,
    MouseObservableComponent,
    ButtonObservableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
