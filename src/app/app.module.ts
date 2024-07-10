import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ActorFormComponent} from './actor-form/actor-form.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, HighlightDirective],
  declarations: [AppComponent, ActorFormComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}