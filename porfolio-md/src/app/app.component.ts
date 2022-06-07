import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'showcase-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Elly\'s Portfolio';

  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  constructor(private router: Router) { }

}


