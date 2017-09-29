import { UserComponent } from './user/user.component';
import { ImobComponent } from './imob/imob.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {   path: '', redirectTo: '/imob', pathMatch: 'full'},
    {   path: 'imob', component: ImobComponent },
    {   path: 'user', component: UserComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{



}