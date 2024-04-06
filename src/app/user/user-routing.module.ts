import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { HostingComponent } from './hosting/hosting.component';

const routes: Routes = [
{path:'Details',component:UserDetailsComponent},
{path:'Admin',component:AdminDetailsComponent},
{path:'Hosting',component:HostingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
