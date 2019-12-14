import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassengersComponent } from './components/passengers/passengers.component';
import { TravelsComponent } from './components/travels/travels.component';
import { PeopleComponent } from './components/people/people.component'
const routes: Routes = [
  { path: 'clientes', component: PeopleComponent },
  { path: 'pasajeros', component: PassengersComponent },
  { path: 'viajes', component: TravelsComponent },
  { path:'', redirectTo:'/pasajeros', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
