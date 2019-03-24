import { Component } from '@angular/core';
import { Menu } from '../interfaces';
import { MenuService } from '../services';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

    /**
     * Campos públicos.
     */
    public menus: Observable<Menu[]>;

    /**
     * Constructor de la clase.
     * @param _menuService MenuService
     */
    constructor(private _menuService: MenuService) {
        this.menus = this._menuService.getMenus();
    }
}
