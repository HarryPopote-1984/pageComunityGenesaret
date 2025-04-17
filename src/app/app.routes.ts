import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [] // Aquí podrás agregar las rutas hijas posteriormente
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
