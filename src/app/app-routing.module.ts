import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AngularComponent } from './angular/angular.component';
import { ErrorComponent } from './error/error.component';
import { FrameworkComponent } from './framework/framework.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ReactComponent } from './react/react.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'framework', component: FrameworkComponent },
  { path: 'home', component: HomeComponent },
  { path: 'react', component: ReactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'nav', component: NavComponent },
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  AboutComponent,
  AngularComponent,
  FrameworkComponent,
  HomeComponent,
  NavComponent,
  ReactComponent,
  NavComponent,
  ErrorComponent,
];
