import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

 constructor(private router: Router){

 }


 async onLogin(){
  this.router.navigate(['/home']).then(result => {
    console.log(result);
});
  }
}
