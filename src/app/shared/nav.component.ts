import {Component, Input} from '@angular/core';

@Component({
  selector: 'nav',

  template: 
  `<div class="nav">
  <div class="flex-spacer"></div>
  <div *ngFor="let page of nav">
  <button mat-flat-button [disableRipple]="true" (click)="scrollTo(page)" >{{page}}</button>
  </div>
  <div class="flex-spacer"></div>
  </div>`,

  styleUrls: ['shared.scss'],
})
export class NavComponent {
  @Input() id: String; 

  nav = ["home", "work", "about me", "contact"];
    
  scrollTo(id){
    console.log("they see me scrolling, they hatin")
    var elmnt = document.getElementById(id);
    elmnt.scrollIntoView({ behavior: 'smooth'});
  }

}

