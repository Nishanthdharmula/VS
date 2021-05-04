import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component'

const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full'},
  {path: 'Menu', component: MenuComponent},
  {path: 'Restaurant', component: RestaurantComponent},
  {path: 'Admin', component: AdminComponent},
  {path: 'User', component: UserComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MenuComponent, RestaurantComponent, AdminComponent, UserComponent]