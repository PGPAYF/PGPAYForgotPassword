import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ErrorComponent } from './error/error.component';
import { ValidateIdGuard } from './guards/validate-id.guard';

const routes: Routes = [
  {path: 'Id/:id', component: ResetPasswordComponent,  canActivate: [ValidateIdGuard]},
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
