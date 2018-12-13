import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SplModule } from 'spl';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SplModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
