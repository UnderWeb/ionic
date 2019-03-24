import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

/**
 * Interfaces.
 */
import { Mutante } from 'src/interfaces';

@Component({
    selector: 'app-pagina3',
    templateUrl: './pagina3.page.html',
    styleUrls: ['./pagina3.page.scss']
})
export class Pagina3Page implements OnDestroy {

    /**
     * Campos privados.
     */
    private subMutante: Subscription;

    /**
     * Campos públicos.
     */
    public mutante: Mutante;

    /**
     * Constructor de la clase.
     * @param activatedRoute ActivatedRoute
     */
    constructor(
        private route: Router,
        private activatedRoute: ActivatedRoute,
        private navController: NavController
    ) {
        this.subMutante = this.activatedRoute.queryParams.subscribe(params => {
            this.mutante = params;
        });
    }

    /**
     * Regresa  ala página anterior.
     */
    public irAtras() {
        this.navController.back();
    }

    /**
     * Regresa al home.
     */
    public home() {
        this.route.navigate(['/']);
    }

    /**
     * Método de destrucción d ela instancia.
     */
    ngOnDestroy() {
        this.subMutante.unsubscribe();
    }
}
