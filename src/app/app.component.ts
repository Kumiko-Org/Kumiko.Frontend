import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageBaseLayoutComponent } from './shared/layout/page-base-layout/page-base-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PageBaseLayoutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Kumiko';
}
