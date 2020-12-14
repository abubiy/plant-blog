import {Component} from '@angular/core';

@Component({
  selector: 'about-scroll',
  template: `<button mat-button (click)="scrollToAbout()">about me</button>`,
  styleUrls: ['shared.scss'],
})
export class AboutScrollComponent {

  scrollToAbout(){
    console.log("they see me scrolling, they hatin")
    var elmnt = document.getElementById("about");
    elmnt.scrollIntoView({ behavior: 'smooth'});
  }
  
}

