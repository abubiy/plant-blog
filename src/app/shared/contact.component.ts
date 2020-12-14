import {Component} from '@angular/core';

@Component({
  selector: 'contact',

  template: `<div class="contact">
  <button mat-icon-button (click)="openLink('linkedin')">
    <mat-icon  class="fa-2x" fontSet="fa" fontIcon="fa-linkedin-square"></mat-icon>
  </button>

  <button mat-icon-button (click)="openLink('twitter')">
    <mat-icon class="fa-2x" fontSet="fa" fontIcon="fa-twitter-square"></mat-icon>
  </button>

  <button mat-icon-button (click)="openLink('facebook')">
    <mat-icon class="fa-2x" fontSet="fa" fontIcon="fa-facebook-square"></mat-icon>
  </button>

  <button mat-icon-button (click)="openLink('instagram')">
    <mat-icon class="fa-2x" fontSet="fa" fontIcon="fa-instagram"></mat-icon>
  </button>

  <button mat-icon-button (click)="openLink('email')">
    <mat-icon class="fa-2x" fontSet="fa" fontIcon="fa-envelope-square"></mat-icon>
  </button>

    </div>`,
  styleUrls: ['shared.scss'],
})
export class ContactComponent {
    
    openLink(x:string){
        switch(x) {
          case "linkedin":
            window.open( 
              "https://www.linkedin.com/in/anjela-bubiy/", "_blank");
            break;
          case "twitter":
            window.open( 
              "https://twitter.com/DAnjelaRussell", "_blank");
            break;
          case "facebook":
            window.open( 
              "https://www.facebook.com/anjela.bubiy/", "_blank");
            break;
          case "instagram":
            window.open( 
              "https://www.instagram.com/anjbub/", "_blank");
            break;
          case "email":
            window.open(
              "mailto:anjelabubiy@gmail.com","_self");
            break;
          }
      }
    
}

