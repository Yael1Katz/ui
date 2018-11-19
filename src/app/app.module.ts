import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { TopComponent } from './components/top/top.component';
//import { SidebarComponent } from './components/sidebar/sidebar.component';
import { routing } from './app.routing';
import { PagesModule } from './pages/pages.module';
import {MatSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//import * as jQuery from 'jquery';
// import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
// import { FirstCharPipe } from './pipes/first-char.pipe';
// import { ContentTopComponent } from './components/content-top/content-top.component';
//import { LineChartComponent } from './components/line-chart/line-chart.component';
//import { ChartistChartComponent } from './components/chartist-chart/chartist-chart.component';
// import { MenuComponent } from './components/menu/menu.component';
// import { MenuItemComponent } from './components/menu-item/menu-item.component';
// import { PieChartComponent } from './components/pie-chart/pie-chart.component';
// import { CardComponent } from './components/card/card.component';

//import { NotificationsCenterComponent } from './components/notifications-center/notifications-center.component';

//import { AppRoutingModule } from './app-routing.module';

// import { HomeComponent } from './pages/home/home.component';
// import { SalesComponent } from './pages/home/sales/sales.component';
// import { ReportComponent } from './pages/home/report/report.component';
// import { TasksComponent } from './pages/home/tasks/tasks.component';
// import { TaskComponent } from './pages/home/tasks/task/task.component';
// import { MessagesComponent } from './pages/home/messages/messages.component';
// import { MessageComponent } from './pages/home/messages/message/message.component';
// import { ActivityComponent } from './pages/home/activity/activity.component';




// App is our top level component

//import { AppState, InternalStateType } from './app.service';
import { GlobalState } from './global.state';
import { ThemeRunDirective } from './directives/theme-run.directive';
//import { BaSlimScroll } from './directives/ba-slim-scroll.directive';
//import { NgaModule } from './theme/nga.module';


//Application wide providers
const APP_PROVIDERS = [
  //AppState,
  GlobalState
];

// export type StoreType = {
//   state: InternalStateType,
//   restoreInputValues: () => void,
//   disposeOldHosts: () => void
// };

@NgModule({
  declarations: [
    AppComponent,
    ThemeRunDirective,
    //BaSlimScroll,
    //DoughnutChartComponent,
    //FirstCharPipe,
    //ContentTopComponent,
    //LineChartComponent,
    //ChartistChartComponent,
    // PieChartComponent,
    // CardComponent,
    // MenuComponent,
    // MenuItemComponent,
    //NotificationsCenterComponent,
    // HomeComponent,
    // SalesComponent,
    // ReportComponent,
    // TasksComponent,
    // TaskComponent,
    // MessagesComponent,
    // MessageComponent,
    // ActivityComponent,
    //TopComponent,
    // SidebarComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    routing,
    BrowserAnimationsModule,
    MatSidenavModule,
    
    // AppRoutingModule
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
  //constructor(public appState: AppState) {
  }

