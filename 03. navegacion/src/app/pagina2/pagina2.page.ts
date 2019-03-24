import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Interfaces.
 */
import { Mutante } from '../../interfaces';

@Component({
    selector: 'app-pagina2',
    templateUrl: './pagina2.page.html',
    styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

    /**
     * Campos públicos.
     */
    public mutantes: Array<Mutante>;

    /**
     * Constructor de la clase.
     * @param router Router
     */
    constructor(private router: Router) { }

    /**
     * Método de inicio.
     */
    ngOnInit() {
        this.mutantes = [
            {
                nombre: "Magneto",
                poder: "Controlar metales"
            },
            {
                nombre: "Wolverine",
                poder: "Regeneración acelerada"
            },
            {
                nombre: "Profesor X",
                poder: "Poderes psíquicos"
            },
            {
                nombre: "Gambito",
                poder: "Energía cinética"
            }
        ];
    }

    /**
     * Redirecciona la página 3 con parámetro de tipo opcional.
     * @param mutante Mutante
     */
    pagina3(mutante: Mutante) {
        this.router.navigate(['pagina3'], {queryParams: mutante});
    }
}
