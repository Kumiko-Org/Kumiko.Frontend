import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  constructor(){
    console.log('Enter here');
  }
  ngOnInit(): void {
    console.log('implements oninit');
  }
}
