import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoldDirective } from './bold.directive';
import { LearningTestComponent } from './learning-test/learning-test.component';

@NgModule({
  declarations: [
    AppComponent,
    BoldDirective,
    LearningTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
