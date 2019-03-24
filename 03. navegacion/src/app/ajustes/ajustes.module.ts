import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AjustesPage } from './ajustes.page';
import { ModalPage } from '../modal';

const routes: Routes = [
    {
        path: '',
        component: AjustesPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        AjustesPage,
        ModalPage
    ],
    entryComponents: [
        ModalPage
    ]
})
export class AjustesPageModule {}
