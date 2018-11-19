import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
//import { NgaModule } from '../theme/nga.module';
//import { AppTranslationModule } from '../app.translation.module';

import { PagesComponent } from './pages.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { TopComponent } from '../components/top/top.component';
import { NotificationsCenterComponent } from '../components/notifications-center/notifications-center.component';
import { MenuItemComponent } from '../components/menu-item/menu-item.component';
import { MenuComponent } from '../components/menu/menu.component';
import { ContentTopComponent } from '../components/content-top/content-top.component';
import { BaSlimScroll } from '../directives/ba-slim-scroll.directive';
import {MatSidenavModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    /*AppTranslationModule, NgaModule,*/
    //BaSlimScroll,
    routing,
    MatSidenavModule,
    MatToolbarModule
  ],
  declarations: [
    PagesComponent,
    SidebarComponent,
    MenuComponent,
    MenuItemComponent,
    TopComponent,
    NotificationsCenterComponent,
    ContentTopComponent,
    BaSlimScroll
  ]
})
export class PagesModule {
}
