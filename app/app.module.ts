import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { SharedComponent } from './components/shared/shared.component';
import { NabvarComponent } from './components/shared/nabvar/nabvar.component';
import { HomeComponent } from './components/shared/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    SharedComponent,
    NabvarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
