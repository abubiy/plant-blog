import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { WorkComponent } from './work.component';


@NgModule({
  declarations: [
    WorkComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    WorkComponent
  ],
  providers: []
})
export class WorkModule { }
