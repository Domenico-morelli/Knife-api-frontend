import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnifeComponent } from './knife/knife.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:'', redirectTo: "home", pathMatch: 'full'},
  {path:"home", component:HomeComponent},
  {path:"knives", component:KnifeComponent},
  // {path:"about", component:KnifeComponent},
  // {path:"contacts", component:KnifeComponent},
  {path:"login", component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
