import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem:any;
  @Output() itemHover = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }

  public onHoverItem($event):void {
    this.itemHover.emit($event);
  }

  public onClickMenuItem($event, item):boolean {
    $event.item = item;
    //this.toggleSubMenu.emit($event);
    return false;
  }
}
