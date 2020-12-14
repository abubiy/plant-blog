import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'portfolio';

  ngOnInit(){
    this.skipContent();
  }

  skipContent() {
    var hidden = document.querySelector(".skip") as HTMLElement;
    window.setTimeout(function() {
      hidden.classList.add('unhide');
    window.scroll(0, hidden.offsetHeight);
    }, 1);
  };

  fade(){
    var links = document.getElementsByClassName("links");
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("visible");
    }
    window.setTimeout(function(){
      for (var i = 0; i < links.length; i++) {
        links[i].classList.add("visible");
      }
    })

  }

  
    
}
