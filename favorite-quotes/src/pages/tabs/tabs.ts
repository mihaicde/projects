import { LibraryPage } from './../library-page/library-page';
import { FavoritesPage } from './../favorites-page/favorites-page';
import { Component } from '@angular/core';


@Component({
    selector: 'page-tabs',
    template: `
        <ion-tabs>
            <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
            <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
        </ion-tabs>
    `
})

export class TabsPage{
    favoritesPage= FavoritesPage;
    libraryPage= LibraryPage
}