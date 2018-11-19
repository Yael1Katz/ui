import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { MenuService } from '../services/menu.service';
import { PAGES_MENU } from './pages.menu';
import { SidenavService } from '../services/sidenav.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  styleUrls: ['./pages.component.scss'],
  selector: 'pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent {

  // options: FormGroup;

  // constructor(fb: FormBuilder, private sidenav: SidenavService, private menuService: MenuService) {
  //   this.options = fb.group({
  //     bottom: 0,
  //     fixed: false,
  //     top: 0
  //   });
  // }
  constructor(private sidenav: SidenavService, private menuService: MenuService){

  }

  ngOnInit() {
    this.menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));


  // toggleRightSidenav() {
  //   debugger;
  //   this.sidenav.toggle();
  // }

  // test(value){
  //   debugger;
  //   this.sidenav.toggle();
  // }
}
