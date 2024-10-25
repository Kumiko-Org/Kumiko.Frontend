import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page-view',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './page-view.component.html',
  styleUrl: './page-view.component.css'
})
export class PageViewComponent {

}
