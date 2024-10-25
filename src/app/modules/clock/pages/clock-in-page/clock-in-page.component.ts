import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-clock-in-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './clock-in-page.component.html',
  styleUrl: './clock-in-page.component.css'
})
export class ClockInPageComponent {

}
