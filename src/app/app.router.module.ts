import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import {FormComponent} from './form/form.component';
import {UsersComponent} from './users/users.component'

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

const routes: Routes = [
{ path: '/', component: UsersComponent },
{ path:'login', component: FormComponent},
{ path:'edit', component: FormComponent}
]; // sets up routes constant where you define your routes







export class AppRoutingModule { }