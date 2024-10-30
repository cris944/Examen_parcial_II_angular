import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { EscuelaComponent } from './escuela/escuela.component';
import { FacultadComponent } from './facultad/facultad.component';
export const routes: Routes = [
{
    path: '',
    component: HomeComponent,
    title: 'Home'
},
{
    path: 'escuela',
    component: EscuelaComponent,
    title: 'escuela'

},
{
    path: 'facultad',
    component: FacultadComponent,
    title: 'facultad'

},
{
path:'**',
redirectTo:'',
pathMatch: 'full'
}

];
