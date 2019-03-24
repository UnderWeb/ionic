import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';

/**
 * Modal.
 */
import { ModalPage } from '../modal';

@Component({
    selector: 'app-ajustes',
    templateUrl: './ajustes.page.html',
    styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage {

    /**
     * Campos públicos.
     */
    public data: any;

    /**
     * Constructor de la clase.
     * @param router Router
     * @param navController NavController
     * @param modalController ModalController
     */
    constructor(
        private router: Router,
        private navController: NavController,
        private modalController: ModalController
    ) { }

    /**
     * Regresa al home.
     */
    home() {
        this.router.navigate(['']);
        //this.navController.navigateForward('principal');
        //this.navController.navigateRoot('');
    }

    /**
     * Abre un modal y recibe sus datos si existen.
     */
    async showModal() {
        const modal = await this.modalController.create({
            component: ModalPage,
            componentProps: { nombre: "Ricardo", edad: 38 }
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data) {
            this.data = data.data;
        }
    }
}
