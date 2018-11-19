import { Routes, RouterModule }  from '@angular/router';

import { HomeComponent } from './home.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);



// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [/*RouterModule.forChild(routes)*/],
//   exports: [RouterModule]
// })
// export class HomeRoutingModule { }
