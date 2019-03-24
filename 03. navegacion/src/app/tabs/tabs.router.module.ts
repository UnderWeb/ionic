import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'principal',
                children: [
                    {
                        path: '',
                        loadChildren: '../principal/principal.module#PrincipalPageModule'
                    }
                ]
            },
            {
                path: 'ajustes',
                children: [
                    {
                        path: '',
                        loadChildren: '../ajustes/ajustes.module#AjustesPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/principal',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/principal',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {}
