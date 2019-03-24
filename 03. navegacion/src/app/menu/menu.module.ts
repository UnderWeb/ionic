import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

/**
 * Services.
 */
import { MenuService } from '../services';

const routes: Routes = [
    {
        path: '',
        component: MenuPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        MenuService
    ]
    //declarations: [MenuPage]
})
export class MenuPageModule {}
