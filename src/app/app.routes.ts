
import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { guardGuard } from './Guard/guard.guard';
import { ProductComponent } from './admin/product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './admin/login/login.component';
import { Login1Component } from './admin/login1/login1.component';



export const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login1', component: Login1Component },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [guardGuard],
    children: [{ path: 'product', component: ProductComponent }],
  },
];
