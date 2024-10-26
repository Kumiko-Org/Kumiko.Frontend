import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSidebarComponent } from './layout/page-sidebar/page-sidebar.component';
import { PageViewComponent } from './layout/page-view/page-view.component';
import { PageHeaderComponent } from './layout/page-header/page-header.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PageViewComponent,
    PageSidebarComponent,
    PageHeaderComponent,
  ],
  exports: [
    CommonModule,
    PageViewComponent,
    PageSidebarComponent,
    PageHeaderComponent
  ]
})
export class SharedModule { }
