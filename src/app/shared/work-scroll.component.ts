import {Component} from '@angular/core';

@Component({
  selector: 'work-scroll',
  template: `<button mat-button (click)="scrollToWork()">work</button>`,
  styleUrls: ['shared.scss'],
})
export class WorkScrollComponent {

  scrollToWork(){
    console.log("they see me scrolling, they hatin")
    var elmnt = document.getElementById("work");
    elmnt.scrollIntoView({ behavior: 'smooth'});
  }
  
}

