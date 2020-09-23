import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoundComponent } from './pound/pound.component';
import { FishComponent } from './fish/fish.component';

@NgModule({
  declarations: [
    AppComponent,
    PoundComponent,
    FishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
