import { Component } from '@angular/core';

/**
 * Interfaces.
 */
import { Animal } from '../../interfaces';

/**
 * Data.
 */
import { ANIMALES } from '../../data';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    /**
     * Campos privados
     */
    private duracion: any;

    /**
     * Campos públicos.
     */
    public animales: Array<Animal>;
    public audio = new Audio();
    public ordenar: boolean;

    /**
     * Construcor de la clase.
     */
    constructor() {
        this.animales = ANIMALES.slice(0);
        this.ordenar = false;
    }

    /**
     * Reproduce el sonido del animal seleccionado.
     * @param animal Animal
     */
    public reproducir(animal: Animal): void {
        this.pausar(animal);

        if (animal.reproduciendo) {
            animal.reproduciendo = false;
            return;
        }

        this.audio.src = animal.audio;
        this.audio.load();
        this.audio.play();
        animal.reproduciendo = true;

        this.duracion = setTimeout(() => animal.reproduciendo = false, animal.duracion * 1000 );
    }

    /**
     * Detiene el sonido del animal seleccionado.
     * @param animal Animal
     */
    private pausar(animal: Animal) {
        clearTimeout(this.duracion);
        this.audio.pause();
        this.audio.currentTime = 0;

        this.animales.forEach((element) => {
            if (element.nombre != animal.nombre) {
                element.reproduciendo = false;
            }
        });
    }

    /**
     * Elimina un animal.
     * @param indice number
     */
    public borrar(indice: number) {
        this.animales.splice(indice, 1);
    }

    /**
     * Refresca el contenido.
     * @param event any
     */
    public refresh(event: any) {
        setTimeout(() => {
            this.animales = ANIMALES.slice(0);
            event.target.complete();
        }, 2000);
    }

    /**
     * Evento de reordenación de los ítems del listado.
     * @param detail any
     */
    public reordenar(detail: any) {
        const reorderGroup = document.querySelector('ion-reorder-group');
        reorderGroup.complete(true)
    }
}
