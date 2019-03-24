import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Menu } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    /**
     * Constructor de la clase.
     * @param http HttpClient
     */
    constructor(private http: HttpClient) {}

    /**
     * Obtiene el menú de la aplicación.
     */
    getMenus() {
        return this.http.get<Menu[]>('/assets/data/menu.json');
    }
}
