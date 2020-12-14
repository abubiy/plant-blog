import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ContactComponent } from './contact.component';
import { AboutScrollComponent } from './about-scroll.component';
import { WorkScrollComponent } from './work-scroll.component';



@NgModule({
  declarations: [
    ContactComponent,
    AboutScrollComponent,
    WorkScrollComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    ContactComponent,
    AboutScrollComponent,
    WorkScrollComponent,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule

  ],
  providers: []
})
export class SharedModule { }
