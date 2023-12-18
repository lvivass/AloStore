import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  //Pagina principal
  { path: '', loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),},
  
  //Paginas secundarias **
  { path: 'dashboard', loadChildren: () => import('./pages/dashboar/dashboard.module').then((m) => m.DashboardModule),},

  { path: 'register', loadChildren: () => import('./pages/register/register.module').then((m) => m.RegisterModule),},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
