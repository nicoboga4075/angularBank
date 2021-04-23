import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard/:id',   title: 'Dashboard', icon:'nc-bank', class: '' },
    { path: '/virement/:id', title: 'Virements', icon:'nc-share-66', class: '' },
    { path: '/facture/:id', title: 'Factures', icon:'nc-money-coins',  class: '' },
    { path: '/releve/:id', title: 'Relevés', icon:'nc-book-bookmark', class: '' },
    { path: '/user/:id', title: 'Profil', icon:'nc-single-02',  class: '' },
    
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {

    public menuItems: any[];
    ngOnInit() {

        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    
}
