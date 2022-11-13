import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'boards',
    pathMatch: 'full'
  },
  {
    path: 'boards',
    loadChildren: () => import('./features/boards/boards.module').then(m => m.BoardsModule),
    canActivate: [AuthGuard],
    pathMatch: 'full'
  },
  {
    path: 'boards/:id',
    loadChildren: () => import('./features/detail/detail.module').then(m => m.DetailModule),
    canActivate: [AuthGuard],
    pathMatch: 'full'
  },
  { 
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule),
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule),
    pathMatch: 'full'
  },
  {
    path: '**',
    pathMatch: 'full',
    loadChildren: () => import('./features/page404/page404.module').then(m => m.Page404Module)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
