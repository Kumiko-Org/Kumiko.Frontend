import { Component } from '@angular/core';
import { PageHeaderComponent } from "../page-header/page-header.component";
import { PageSidebarComponent } from "../page-sidebar/page-sidebar.component";
import { CommonModule } from '@angular/common';
import { PageViewComponent } from "../page-view/page-view.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page-base-layout',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    PageSidebarComponent,
    PageViewComponent,
    RouterOutlet
],
  templateUrl: './page-base-layout.component.html',
  styleUrl: './page-base-layout.component.css'
})
export class PageBaseLayoutComponent {

}
