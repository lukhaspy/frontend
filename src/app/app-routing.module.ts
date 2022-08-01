import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './satisfaccion/add/add.component';
import { ListarComponent } from './satisfaccion/listar/listar.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './core/guards/AuthGuard';

const routes: Routes = [
  { path: 'admin/satisfacciones', component: ListarComponent, canActivate: [AuthGuardGuard] },
  { path: 'satisfaccion', component: AddComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: AddComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],

})
export class AppRoutingModule { }
