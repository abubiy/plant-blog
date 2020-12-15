import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


import { ContactComponent } from './contact.component';
import { NavComponent } from './nav.component';



@NgModule({
  declarations: [
    ContactComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  exports: [
    ContactComponent,
    NavComponent,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule

  ],
  providers: [MatIconRegistry]
})
export class SharedModule { }
