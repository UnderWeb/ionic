import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    //{ path: '', redirectTo: 'tabs', pathMatch: 'full' },
    //{ path: 'home', loadChildren: './home/home.module#HomePageModule' },
    //{ path: 'principal', loadChildren: './principal/principal.module#PrincipalPageModule' },
    { path: 'pagina2', loadChildren: './pagina2/pagina2.module#Pagina2PageModule' },
    { path: 'pagina3', loadChildren: './pagina3/pagina3.module#Pagina3PageModule' },
    //{ path: 'ajustes', loadChildren: './ajustes/ajustes.module#AjustesPageModule' },
    { path: 'ajustes2', loadChildren: './ajustes2/ajustes2.module#Ajustes2PageModule' },
    { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
    //{ path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
