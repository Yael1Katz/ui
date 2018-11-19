import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-top',
  templateUrl: './content-top.component.html',
  styleUrls: ['./content-top.component.scss']
})
export class ContentTopComponent implements OnInit {
  public activePageTitle: string = 'Hello Yael!';

  constructor() {
    // this._state.subscribe('menu.activeLink', (activeLink) => {
    //   if (activeLink) {
    //     this.activePageTitle = activeLink.title;
    //   }
    // });
  }

  ngOnInit() {
  }

}
