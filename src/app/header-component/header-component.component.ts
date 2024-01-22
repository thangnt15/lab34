import { Component, inject } from '@angular/core';
import { IMenu } from '../interface/menu';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css',
})
export class HeaderComponentComponent {
  // router = inject(Router)
  // logout(){
  //   // console.log('logged out');
  //   localStorage.removeItem('login');   
  //   this.router.navigate(['login']);
  // }
  menus: IMenu[] = [
    {
      id: 1,
      title: 'Home',
      url: '/',
      parent: 0,
    },
    {
      id: 2,
      title: 'Products',
      url: 'dashboard',
      parent: 0,
    },
    {
      id: 3,
      title: 'About',
      url: 'dashboard/product',
      parent: 0,
    },
    {
      id: 4,
      title: 'Contact',
      url: 'contact',
      parent: 0,
    },
    {
      id: 5,
      title: 'by Email',
      url: 'by-email',
      parent: 4,
    },
    {
      id: 6,
      title: 'by Fanpage',
      url: 'by-fanpage',
      parent: 4,
    },
  ];
}
