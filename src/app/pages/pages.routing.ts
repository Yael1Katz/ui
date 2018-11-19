import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' }
            // { path: 'home', loadChildren: './home/home.module#HomeModule' }
            // { path: 'workflow', loadChildren: './workflow/workflow.module#WorkflowModule' },
            // { path: 'statistics', loadChildren: './statistics/statistics.module#StatisticsModule' },
            // { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarModule' },
            // { path: 'users', loadChildren: './users/users.module#UsersModule' },
            // { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' }

        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
