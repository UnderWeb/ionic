import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.page.html',
    styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

    /**
     * Campos públicos.
     */
    public nombre: string;
    public edad: number;
    public data: any;

    /**
     * Constructor de la clase.
     * @param navParams NavParams
     * @param modalController ModalController
     */
    constructor(private navParams: NavParams, private modalController: ModalController) {
        this.nombre = this.navParams.get('nombre');
        this.edad = this.navParams.get('edad');
    }

    /**
     * Método de inicio.
     */
    ngOnInit() {
        this.data = {
            nombre: 'Ricardo',
            edad: 38,
            coords: {
                lat: 10,
                lng: -10
            }
        };
    }

    /**
     * Cierra el modal enviando parámetros.
     */
    cerrarConParametros() {
        this.modalController.dismiss({
            data: this.data
        });
    }

    /**
     * Cierra el modal sin enviar parámetros.
     */
    cerrarSinParametros() {
        this.modalController.dismiss();
    }
}
