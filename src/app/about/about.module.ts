import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AboutComponent } from './about.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AboutComponent
  ],
  providers: []
})
export class AboutModule { }
