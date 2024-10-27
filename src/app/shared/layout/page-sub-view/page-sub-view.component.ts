import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';  // Import RouterModule
import { filter } from 'rxjs';
import { NavItem } from '../../../core/interfaces/nav-item';

@Component({
  selector: 'app-page-sub-view',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './page-sub-view.component.html',
  styleUrl: './page-sub-view.component.css'
})

export class PageSubViewComponent implements OnInit {

  navItems: NavItem[] = [];

  defaultNavItems: NavItem[] = [
    { name: 'Home', link: '/home', isActive: true },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' }
  ];

  adminNavItems: NavItem[] = [
    { name: 'Dashboard', link: '/dashboard', isActive: true },
    { name: 'Users', link: '/users' },
    { name: 'Settings', link: '/settings' },
    { name: 'Logout', link: '/logout' }
  ];

  guestNavItems: NavItem[] = [
    { name: 'Home', link: '/home', isActive: true },
    { name: 'Login', link: '/login' },
    { name: 'Register', link: '/register' }
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }


  ngOnInit(): void {
    // Listen for route changes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateNavItemsBasedOnRoute();
      });

    this.updateNavItemsBasedOnRoute();
  }

  updateNavItemsBasedOnRoute() {
    const currentRoute = this.activatedRoute.snapshot.firstChild?.routeConfig?.path;

    // Example logic based on route; adjust as needed
    if (currentRoute === 'clock-admin') {
      this.navItems = this.adminNavItems;
    }
    else if (currentRoute === 'login' || currentRoute === 'register') {
      this.navItems = this.guestNavItems;
    }
    else {
      this.navItems = this.defaultNavItems;
    }
  }

}
