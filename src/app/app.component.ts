import { Component } from '@angular/core';
import { GlobalState } from './global.state';
//import { GlobalState } from './global.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMenuCollapsed: boolean = false;
  title = 'dashboard';

  constructor(private globalState: GlobalState) {

    this.globalState.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });

  }

}
