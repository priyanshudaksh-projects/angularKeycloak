import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { ContentComponent } from './component/content/content.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'home', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
  { path: 'login', component: ContentComponent, canActivate: [AuthGuard] },
  // { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
