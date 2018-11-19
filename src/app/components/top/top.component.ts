import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GlobalState } from '../../global.state';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;
  @Output() test = new EventEmitter<any>();

  constructor(private globalState: GlobalState) {
    this.globalState.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  ngOnInit() {
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this.test.emit(this.isMenuCollapsed);
    //this.globalState.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    //return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
}
