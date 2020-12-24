import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   path: 'assets/Dev_Resume.pdf',
  //   redirectTo: 'Dev_Resume.pdf'
  // },
  // {
  //   path: '**', 
  //   redirectTo: 'NotFound'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
