import { Component } from '@angular/core';
import { PageViewComponent } from "../page-view/page-view.component";
import { HomePageComponent } from "../../../modules/home/pages/home-page/home-page.component";
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PageViewComponent,
    HomePageComponent
  ],
  templateUrl: './page-sidebar.component.html',
  styleUrl: './page-sidebar.component.css'
})
export class PageSidebarComponent {

  constructor(private router: Router) {

  }


  public onHome() {
    this.router.navigate(['/home'])
  }


  public onClock() {
    this.router.navigate(['/clock-admin'])
  }


  public onLogout() {
    this.router.navigate(['/auth'])
  }
}
