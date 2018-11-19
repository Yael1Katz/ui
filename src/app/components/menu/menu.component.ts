import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() sidebarCollapsed: boolean = false;
  @Output() expandMenu = new EventEmitter<any>();
  @Input() menuHeight: number;


  public menuItems: any[];
  //protected _menuItemsSub: Subscription;
  //public showHoverElem: boolean;
  //public hoverElemHeight: number;
  //public hoverElemTop: number;
  protected onRouteChange: Subscription;
  //public outOfArea: number = -200;

  constructor(private router: Router, private menuService: MenuService) { }

  ngOnInit() {
    this.onRouteChange = this.router.events.subscribe((event) => {
      //if (event instanceof NavigationEnd) {
        if (this.menuItems) {
          this.selectMenuAndNotify();
        } else {
          // on page load we have to wait as event is fired before menu elements are prepared
          setTimeout(() => this.selectMenuAndNotify());
        }
      //}
    });
    this.menuService.menuItems.subscribe(this.updateMenu.bind(this));
    //this._menuItemsSub = this._service.menuItems.subscribe(this.updateMenu.bind(this));
  }

  public updateMenu(newMenuItems) {
    this.menuItems = newMenuItems;
    this.selectMenuAndNotify();
  }

  public selectMenuAndNotify(): void {
    if (this.menuItems) {
      this.menuItems = this.menuService.selectMenuItem(this.menuItems);
      //this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());
    }
  }
}
